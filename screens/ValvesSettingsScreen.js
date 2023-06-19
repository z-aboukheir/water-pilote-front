import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import ValveContainer from "../components/ValveContainer";
import {
    useContext,
    useEffect,
    useState
} from "react";
import { fetchWithToken } from "../services/fetchService";
import {
    AuthContext
} from "../context/AuthContext";

const ValvesSettingsScreen = () => {
        const navigation = useNavigation();

       const { fetchWithToken } = useContext(AuthContext);
       const [sorties, setSorties] = useState([]);

       const fetchData = async () => {
         try {
           const response = await fetchWithToken('http://127.0.0.1:3000/electrovalve', {
             method: 'GET',
           });
           if (response.ok) {
               const responseData = await response.json();
             setSorties(responseData);
           } else {
             console.log('Erreur lors de la requête');
           }
         } catch (error) {
           console.log('Erreur de réseau:', error.message);
         }
       };

    const updateData = async () => {
        try {
            const response = await fetchWithToken(`http://localhost:3000/electrovalve/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(settings)
            });
        }
        catch (error) {
            console.log('Erreur de réseau:', error.message);
        }
    }

       useEffect(() => {
         fetchData();
       }, [fetchWithToken]);
    return (
        <ImageBackground
            source={require("../assets/plante-1.png")}
            style={{width: "125%", height: "100%"}}
            resizeMode="cover">
            <View>
                <View style={styles.titleContainer}>
                    <Pressable
                        onPress={() => navigation.goBack()}>
                        <Image style={{ width: 95, height: 95 }} source={require("../assets/back.png")}/>
                    </Pressable>
                    <Text style={styles.title}>Paramétrage</Text>
                </View>
                <View style={styles.outputContainer}>
                    {Object.keys(sorties).map((sortie) => (
                        <ValveContainer
                            key={sorties[sortie].id}
                            name={sorties[sortie].name}
                            isAutomatic={sorties[sortie].isAutomatic}
                            onPressWatering={() => navigation.navigate("WateringSettingsScreen",
                                { id: sorties[sortie].id,})}
                            onPressSchedule={() => navigation.navigate("SchedulesSettingsScreen",
                                { id: sorties[sortie].id,})}
                        />
                      ))}
                  </View>
            </View>
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 45,
        paddingBottom: 80,
    },
    title: {
        fontSize: FontSize.size_13xl,
        color: Color.darkGrey,
        fontFamily: FontFamily.poppinsMedium,
        marginTop: -20,
    },
    outputContainer: {
        paddingLeft: 30
    }
});
export default ValvesSettingsScreen;