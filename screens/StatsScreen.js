import { Text, ScrollView, StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import Chart from "../components/Chart";
import * as React from "react";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "@env";

const StatsScreen = () => {
  const [irrigationsData, setIrrigationsData] = useState([]);
  const navigation = useNavigation();
  const { fetchWithToken } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const response = await fetchWithToken(`${API_URL}/stats/irrigations`, {
        method: "GET",
      });
      // console.log(response)
      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData)
        setIrrigationsData(responseData);
      } else {
        console.log("Erreur lors de la requête");
      }
    } catch (error) {
      console.log("Erreur de réseau:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchWithToken]);

  return (
    <ScrollView>
        <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Statistiques</Text>
      </View>

      {irrigationsData && Object.keys(irrigationsData).length > 0 ? (
        <Chart data={irrigationsData} />
      ) : (
        <Text style={styles.noDataText}>
          Aucune statistique ces 7 derniers jours
        </Text>
      )}
      </View>
    </ScrollView>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: "10%",
    margin: 12,
    marginBottom: 90,
    marginTop: 30,
    paddingVertical: 40, 
 
   
  },
  titleContainer: {
      paddingBottom: 60,
    alignSelf:'flex-start'
    
  },
  title: {
    fontSize: FontSize.size_13xl,
    color: Color.darkGrey,
    fontFamily: FontFamily.poppinsMedium,
   
  },
  noDataText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    fontFamily: FontFamily.poppinsMedium,

  },
});
