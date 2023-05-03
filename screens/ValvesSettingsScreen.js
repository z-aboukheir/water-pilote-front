import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import ValveContainer from "../components/ValveContainer";
import { useState } from "react";

const ValvesSettingsScreen = () => {
    const navigation = useNavigation();

    const [sorties, setSorties] = useState({
        sortie1: { id: 1, name: "Lettuce" },
        sortie2: { id: 2, name: "Strawberry"},
        sortie3: { id: 3, name: "Tomatoes"},
    });

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