import * as React from "react";
import { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Picker,
  Button,
  FlatList,
  Switch,
  Image,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import BackButton from "../components/BackButton";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";

import { AuthContext } from "../context/AuthContext";

const SchedulesSettingsScreen = ({ route }) => {
  const { fetchWithToken } = useContext(AuthContext);
  const { idValve, nameValve } = route.params;
  const navigation = useNavigation();

  // État local pour stocker les plannings
  const [plannings, setPlannings] = useState([]);
  // États pour les heures de début et de fin
  const [newStartTime, setNewStartTime] = useState("00");
  const [newEndTime, setNewEndTime] = useState("01");
  // Liste des heures de fin possibles
  const [endTimes, setEndTimes] = useState([]);
  // Liste des jours sélectionnés
  const [selectedDays, setSelectedDays] = useState([]);

  // État pour gérer l'affichage de la section d'ajout de planification
  const [showAddPlanningSection, setShowAddPlanningSection] = useState(false);

  const [idSetting, setIdSetting] = useState("");

  // Générer un tableau des heures (00 à 24)
  const hours = Array.from({ length: 25 }, (_, i) =>
    i < 10 ? `0${i}` : `${i}`
  );

  // Mapping entre les initiales des jours et leurs numéros
  const dayMapping = {
    L: 1,
    M: 2,
    M: 3,
    J: 4,
    V: 5,
    S: 6,
    D: 7,
  };

  // Fonction pour basculer l'activation du planning
  const toggleActivation = async (planningId, currentValue) => {
    const valuesUpdate = plannings.filter((p) => p.id == planningId);
    try {
      const response = await fetchWithToken(
        `http://localhost:3000/electrovalve/${idValve}/valveSettings/schedule/${planningId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            hourStart: valuesUpdate[0].hourStart,
            hourEnd: valuesUpdate[0].hourEnd,
            days: valuesUpdate[0].days,
            idSetting: idSetting,
            isActivated: !currentValue,
          }),
        }
      );

      if (response.ok) {
        // Mettez à jour l'état local pour refléter le changement d'activation
        const updatedPlannings = plannings.map((planning) => {
          if (planning.id === planningId) {
            return { ...planning, isActivated: !currentValue };
          }
          return planning;
        });
        setPlannings(updatedPlannings);
      } else {
        console.error(
          "Erreur lors de la mise à jour de l'activation du planning"
        );
      }
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de l'activation du planning:",
        error
      );
    }
  };

  // recuperer l'id des settings correspondant à la valve
  const fetchDatasettings = async () => {
    try {
      const response = await fetchWithToken(
        `http://localhost:3000/electrovalve/${idValve}/valveSettings`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        setIdSetting(responseData[0].id);
      } else {
        console.log("Erreur lors de la requête");
      }
    } catch (error) {
      console.log("Erreur de réseau:", error.message);
    }
  };

  // enregistrement des plannings dans l'etat plannings depuis l'API
  const fetchDataschedules = async () => {
    try {
      const response = await fetchWithToken(
        `http://localhost:3000/electrovalve/${idValve}/valveSettings/schedule`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        if (responseData && responseData.length > 0) {
          setPlannings(responseData);
        } else {
          setPlannings("ajouter une plannification");
        }

        // }
      } else {
        console.log("Erreur lors de la requête");
      }
    } catch (error) {
      console.log("Erreur de réseau:", error.message);
    }
  };

  // Récupération des plannings depuis l'API au chargement du composant
  useEffect(() => {
    fetchDataschedules();
    fetchDatasettings();
  }, []);

  // Mise à jour de la liste des heures de fin en fonction de l'heure de début
  useEffect(() => {
    const startIndex = hours.indexOf(newStartTime);
    const availableEndTimes = hours.slice(startIndex + 1);
    setEndTimes(availableEndTimes);
  }, [newStartTime]);

  // Gestion de la sélection et désélection des jours
  const toggleDaySelection = (day) => {
    setSelectedDays((prevDays) => {
      if (prevDays.includes(day)) {
        return prevDays.filter((d) => d !== day);
      } else {
        return [...prevDays, day];
      }
    });
  };

  // Ajouter un nouveau planning
  const addPlanning = async () => {
    const planningDaysInNumbers = selectedDays.map((day) => dayMapping[day]);
    // convertir le tabelau en chaine de caratere
    const planningDaysString = planningDaysInNumbers.join(", ");

    const newPlanning = {
      hourStart: newStartTime,
      hourEnd: newEndTime,
      days: planningDaysString,
      idSetting: idSetting,
      isActivated: true,
    };

    try {
      const response = await fetchWithToken(
        `http://localhost:3000/electrovalve/${idValve}/valveSettings/schedule`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlanning),
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        if (typeof plannings !== "string") {
          setPlannings([...plannings, responseData]);
        } else {
          setPlannings([responseData]);
        }

        setShowAddPlanningSection(false);
      } else {
        console.error("Erreur lors de l'ajout du planning");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du planning:", error);
    }
  };

  // Supprimer un planning
  const deletePlanning = async (planningId) => {
    try {
      const response = await fetchWithToken(
        `http://localhost:3000/electrovalve/${idValve}/valveSettings/schedule/${planningId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const planningDelete = plannings.filter((p) => p.id !== planningId);

        if (planningDelete.length > 0) {
          setPlannings(planningDelete);
        } else {
          setPlannings("ajouter une plannification");
        }
      } else {
        console.error("Erreur lors de la suppression du planning");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du planning:", error);
    }
  };

  // mettre en surbrillance les jours qui sont enregistrer dasn les schedules
  const isDayInSchedule = (daysString, dayNumber) => {
    const daysArray = daysString.split(", ");
    return daysArray.includes(dayNumber.toString());
  };

  // mettre le format approprié sur les heures fetcher et affichée
  const formatHour = (hour) => {
    if (hour.length === 1) {
      return `0${hour}h`;
    }
    return `${hour}h`;
  };

  function getThumbColor(item) {
    return Platform.select({
      ios: item.isActivated ? "#BCC604" : "#f4f3f4",
      android: "desiredColorForAndroid",
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 95, height: 95 }}
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.title}>Planification</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text style={styles.titleValve}>{nameValve}</Text>

        {/* Si plannings est une chaîne de caractères, affichez un message sinon  Afficher la liste des plannings */}
        {plannings && typeof plannings === "string" ? (
          <Text style={{ textAlign: "center", marginTop: 20 , marginBottom: 10}}>
            {plannings}
          </Text>
        ) : (
          <FlatList
            style={{ maxWidth: 500, minWidth: 300, width: "100%", marginBottom: 40 }}
            data={plannings}
            keyExtractor={(item) => item && item.id && item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.planningItemContainer}>
                {/* Ajout du toggle pour activer/désactiver le planning */}
                <Switch
                  trackColor={{ false: "#767577", true: "#BCC604" }}
                  thumbColor={getThumbColor(item)}
                  value={item.isActivated}
                  onValueChange={() =>
                    toggleActivation(item.id, item.isActivated)
                  }
                />
                <Text style={styles.timeText}>
                  {item && formatHour(item.hourStart)} -{" "}
                  {formatHour(item && item.hourEnd)}
                </Text>
                <View style={styles.dayListContainer}>
                  {Object.keys(dayMapping).map((dayKey) => {
                    const isDaySelected = isDayInSchedule(
                      item && item.days,
                      dayMapping[dayKey]
                    );
                    return (
                      <Text
                        key={dayKey}
                        style={[
                          styles.dayLabel,
                          isDaySelected && styles.selectedDayText,
                        ]}
                      >
                        {dayKey}
                      </Text>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={styles.buttonDelete}
                  onPress={() => deletePlanning(item.id)}
                >
                  <Text style={styles.textDelete}>✖</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}

        {/* Bouton pour montrer/cacher la section d'ajout de planification */}
        {!showAddPlanningSection && (
          <Button
            color="#BCC604"
            title={"Ajouter"}
            onPress={() => setShowAddPlanningSection(!showAddPlanningSection)}
          />
        )}

        {showAddPlanningSection && (
          <>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Text>Début</Text>
                {/* Sélecteur pour l'heure de début */}
                <Picker
                  selectedValue={newStartTime}
                  onValueChange={(itemValue) => setNewStartTime(itemValue)}
                >
                  {hours.map((hour) => (
                    <Picker.Item key={hour} label={hour} value={hour} />
                  ))}
                </Picker>
              </View>

              {/* Sélecteur pour l'heure de fin */}
              <View>
                <Text>Fin</Text>
                <Picker
                  selectedValue={newEndTime}
                  onValueChange={(itemValue) => setNewEndTime(itemValue)}
                >
                  {endTimes.map((hour) => (
                    <Picker.Item key={hour} label={hour} value={hour} />
                  ))}
                </Picker>
              </View>
            </View>
            {/* Boutons pour sélectionner les jours */}
            <View style={styles.daySelectionContainer}>
              {Object.keys(dayMapping).map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    selectedDays.includes(day) && styles.selectedDay,
                  ]}
                  onPress={() => toggleDaySelection(day)}
                >
                  <Text>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{flexDirection : "row", gap: 5}}>
              <Button color="#BCC604" title="confirmer" onPress={addPlanning} />
              <Button
                color="red"
                title="annuler"
                onPress={() => setShowAddPlanningSection(false)}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

// Styles du composant
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10, // Pour ajouter un peu d'espace autour du contenu
  paddingBottom : 50
  },
  
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 45,
  },
  title: {
    fontSize: FontSize.size_13xl,
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    marginTop: -20,
  },

  titleValve: {
    fontSize: FontSize.size_lg,
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginVertical: 20,

  },

  planningItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

  timeText: {
    fontFamily: FontFamily.primary,
    fontSize: FontSize.medium,
    color: Color.darkPrimary,
    marginHorizontal: 10,
  },

  daySelectionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },

  dayListContainer: {
    flexDirection: "row",
  },

  dayLabel: {
    fontFamily: FontFamily.primaryBold,
    fontSize: FontSize.small,
    color: "#C0C0C0",
    marginHorizontal: 5, // Pour espacer les jours
  },

  selectedDay: {
    backgroundColor: "#BCC604",

  },

  selectedDayText: {
    color: "red",
    fontWeight: "bold",
  },


  buttonDelete: {
    backgroundColor: "#ff6b6b",
    borderRadius: 15,
    padding: 10,
    marginLeft: 15,
  },
  textDelete: {
    color: "white",
    fontFamily: FontFamily.primaryBold,
    fontSize: FontSize.medium,
  },

  dayButton: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },

  addButton: {
    backgroundColor: Color.lightPrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  addButtonText: {
    fontFamily: FontFamily.primaryBold,
    fontSize: FontSize.medium,
    color: "white",
  },
  
});

export default SchedulesSettingsScreen;
