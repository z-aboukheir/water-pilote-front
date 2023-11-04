
import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View, ImageBackground, Modal, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import ValveContainer from "../components/ValveContainer";
import {
    useContext,
    useEffect,
    useState
} from "react";
import {
    AuthContext
} from "../context/AuthContext";

import ModalValveScreen from "../components/ModalValveScreen";
import {API_URL} from "@env"

const ValvesSettingsScreen = () => {
    const navigation = useNavigation();

    const { fetchWithToken } = useContext(AuthContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [valveName, setValveName] = useState('');
    const [valvePinPosition, setValvePinPosition] = useState('');

    const [sorties, setSorties] = useState([]);

    useEffect(() => {
        if (modalVisible) {
            // Lorsque la modal s'ouvre, on réinitialise les champs
            setValveName("");
            setValvePinPosition("");
        }
    }, [modalVisible]);

   

    const updateValve = async (id , valveName) => {
        if (valveName === '') {
            Alert.alert("Veuillez remplir les deux champs");

        } else {
            const updatedValve = {
                name: valveName,
            }
            
            try {
                const response = await fetchWithToken(`${API_URL}/electrovalve/${id}`, {
                    method: 'PATCH', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedValve)
                });
                
                if (response.ok) {
                    Alert.alert("La valve a été mise à jour avec succès!");
                    fetchData();  
                } else {
                    Alert.alert("Une erreur est survenue. Veuillez réessayer.");
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
            // setModalVisible(false);
        }
    };
    

    const addValve = async () => {
        if (valveName === '' || valvePinPosition === '') {
            Alert.alert("Veuillez remplir les deux champs");
        } else {
            const nouvelleSortie = {
                name: valveName,
                pinPosition: valvePinPosition,
            }
            
            try {
                const responseVavle = await fetchWithToken('${API_URL}/electrovalve', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nouvelleSortie)
                  
                });
            
                if (responseVavle.ok) {
                    const dataValve =  await responseVavle.json()
                    Alert.alert("La valve a été ajoutée avec succès!");
                  
                   await fetchWithToken(`${API_URL}/electrovalve/${dataValve.id}/valveSettings`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify( { wateringRate: 0,
                                    duration: 0,
                                    moistureThreshold: 0,
                                    rainThreshold: 0})
                            });
                            // setSorties(dataValve);
                            fetchData();       
                              
                } else {
                    Alert.alert("Une erreur est survenue. Veuillez réessayer.");
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
            // setModalVisible(false);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetchWithToken(`${API_URL}/electrovalve`, {
                method: 'GET',
            });
            if (response.ok) {
                const responseData = await response.json();
                if (JSON.stringify(responseData) !== JSON.stringify(sorties)) {
                    setSorties(responseData);
                }
            } else {
                console.log('Erreur lors de la requête');
            }
            
        } catch (error) {
            console.log('Erreur de réseau:', error.message);
        }
    };


   
    const deleteValve = async (id) => {
        try {
            const response = await fetchWithToken(`${API_URL}/electrovalve/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const responseData = response.json()
                Alert.alert("La valve a été supprimée avec succès!");
                // setSorties(responseData);
                fetchData();       
            } else {
                Alert.alert("Une erreur est survenue. Veuillez réessayer.");
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };
    
 

    useEffect(() => {
        fetchData();
    }
    // , [fetchWithToken]
    );

    // console.log(sorties.map(sortie => sortie.id));


    return (
        // <ImageBackground
        //     source={require("../assets/plante-1.png")}
        //     style={{ width: "125%", height: "100%" }}
        //     resizeMode="cover">
            <ScrollView>
 
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Paramétrage</Text>
                </View>
                <View style={styles.outputContainer}>
                    {Object.keys(sorties).map((sortie) => (
                        <ValveContainer
                            key={sorties[sortie].id}
                            name={sorties[sortie].name}
                            isAutomatic={sorties[sortie].isAutomatic}
                            onPressWatering={() => navigation.navigate("WateringSettingsScreen",
                                { idValve: sorties[sortie].id, })}
                            onPressSchedule={() => navigation.navigate("SchedulesSettingsScreen",
                                { idValve: sorties[sortie].id, nameValve: sorties[sortie].name,})}
                                onDelete={() => deleteValve(sorties[sortie].id)} 
                                updateValve = {updateValve}
                                valveId = {sorties[sortie].id}
                               
                        />
                    ))}
                </View>
                <View style={styles.containerAddButton}>
                    <Pressable style={styles.addButton}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.addButtonText}>Ajouter une Valve</Text>
                    </Pressable>
                </View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}

                >
                    <ModalValveScreen setModalVisible={setModalVisible} setValveName={setValveName} valveName={valveName} setValvePinPosition={setValvePinPosition} valvePinPosition={valvePinPosition} addValve={addValve} />

                </Modal>
                </ScrollView>     
                //    </ImageBackground>
    );
};

const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 45,
        marginLeft : 25
    },
    title: {
        fontSize: FontSize.size_13xl,
        color: Color.darkGrey,
        fontFamily: FontFamily.poppinsMedium,
        marginTop: -20,
    },
    outputContainer: {
        paddingLeft: 30,
       
    },
    containerAddButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: '-25%',
        marginTop: 50,
        marginBottom: 150

    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: Color.lightslategray,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    }
});
export default ValvesSettingsScreen;
