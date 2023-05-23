import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import SettingSlider from '../components/SettingSlider';
import BackButton
    from "../components/BackButton";
import {
    fetchWithToken
} from "../services/fetchService";

const WateringSettingsScreen = () => {
    // Valeurs par défaut pour chaque slider
    const [settings, setSettings] = useState({
        wateringRate: 50,
        wateringDuration: 30,
        humidityThreshold: 50,
        rainProbability: 30,
    });

    // Fonction pour enregistrer les nouvelles valeurs
    const saveSettings = () => {
        // Ici, on peut envoyer les nouvelles valeurs via une API ou les stocker localement
        console.log('Settings saved', settings);
        // fetchWithToken('http://localhost:3000/settings', 'POST', settings)
    };

    return (

        <View>
            <BackButton screenTitle={"Paramètres"}/>
            <View style={styles.mainContainer}>
                <SettingSlider
                    name="Débit d'arrosage"
                    value={settings.wateringRate}
                    unit="%"
                    setValue={(newValue) =>
                        setSettings({...settings, wateringRate: newValue})
                    }
                />

                <SettingSlider
                    name="Durée d'arrosage"
                    value={settings.wateringDuration}
                    unit="min"
                    setValue={(newValue) =>
                        setSettings({...settings, wateringDuration: newValue})
                    }
                />

                <SettingSlider
                    name="Seuil d'humidité"
                    value={settings.humidityThreshold}
                    unit="%"
                    setValue={(newValue) =>
                        setSettings({...settings, humidityThreshold: newValue})
                    }
                />

                <SettingSlider
                    name="Probabilité de pluie"
                    value={settings.rainProbability}
                    unit="%"
                    setValue={(newValue) =>
                        setSettings({...settings, rainProbability: newValue})
                    }
                />

                <TouchableOpacity style={[styles.button, styles.buttonContainer]} onPress={saveSettings}>
                    <Text style={styles.buttonText}>Enregistrer</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 100,
        paddingHorizontal: '10%',
        alignContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#BCC604',
        height: 50,
        width: 200,
        textAlign: 'center',
        paddingTop: 12,
        borderRadius: 10,
    },
    buttonContainer: {
        alignSelf: 'center',
    },
});

export default WateringSettingsScreen;
