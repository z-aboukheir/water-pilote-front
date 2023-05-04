import * as React
    from "react";
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    TextInput
} from "react-native";
import {
    LinearGradient
} from "expo-linear-gradient";
import {
    useNavigation
} from "@react-navigation/native";
import {
    useState
} from "react";
import BackButton
    from "../components/BackButton";
import {
    Color,
    FontFamily,
    FontSize
} from "../GlobalStyles";

const SchedulesSettingsScreen = () => {

    const navigation = useNavigation();
    const daysAbbreviation = ["L", "M", "M", "J", "V", "S", "D"];
    const [schedules, setSchedules] = useState({
        1: {
            id: 1,
            valveId: 1,
            days: [1, 3, 5],
            hourStart: 8,
            hourEnd: 10,
            idSettings: 1,
        },
        2: {
            id: 2,
            valveId: 3,
            days: [2, 4, 6],
            hourStart: 9,
            hourEnd: 11,
            idSettings: 2,
        },
    });

    // Fonction pour obtenir l'abréviation du jour en fonction de l'index
    const getDayAbbreviation = (dayIndex) => {
        return daysAbbreviation[dayIndex];
    };

    // Fonction pour vérifier si un jour est présent dans le tableau days
    const isDayPresent = (dayIndex, days) => {
        return days.includes(dayIndex);
    };

    const handleDayPress = (dayIndex, schedule) => {
        // Vérifier si le jour est déjà présent dans la liste des jours
        const isPresent = schedule.days.includes(dayIndex);

        // Copier la liste des jours actuelle
        const updatedDays = [...schedule.days];

        if (isPresent) {
            // Le jour est présent, le supprimer de la liste
            const index = updatedDays.indexOf(dayIndex);
            updatedDays.splice(index, 1);
        } else {
            // Le jour n'est pas présent, l'ajouter à la liste
            updatedDays.push(dayIndex);
        }

        // Mettre à jour les jours dans l'état
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [schedule.id]: {
                ...schedule,
                days: updatedDays,
            },
        }));
    };

    const updateStartHour = (hour, schedule) => {
        const updatedSchedule = { ...schedule, hourStart: hour };
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [schedule.id]: updatedSchedule,
        }));
    };

    const updateEndHour = (hour, schedule) => {
        const updatedSchedule = { ...schedule, hourEnd: hour };
        setSchedules((prevSchedules) => ({
            ...prevSchedules,
            [schedule.id]: updatedSchedule,
        }));
    };


    return (
        <LinearGradient
            colors={['#EEF0F5', '#E2E4EA']}
            style={{height: '100%'}}>
            <View
                style={styles.titleContainer}>
                <BackButton
                    screenTitle={"Planification"}/>
            </View>
            <View>
                {Object.values(schedules).map((schedule) => (
                    <View key={schedule.id}>
                        <View style={styles.scheduleTitle}>
                            <Text style={{ fontFamily: FontFamily.poppinsMedium, fontSize: 18, color: Color.darkGrey }}>
                                Valve id: {schedule.valveId}
                            </Text>
                        </View>
                        <LinearGradient style={styles.scheduleContainer} colors={['#EEF0F5', '#E6E9EF', '#E6E9EF']}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                                <TextInput
                                    style={styles.hourStyle}
                                    value={String(schedule.hourStart)}
                                    onChangeText={(text) => updateStartHour(Number(text), schedule)}
                                />
                                <Text style={{ fontSize: FontSize.size_lg, color: Color.darkGrey, marginRight: 10 }}> : 00 </Text>
                                <TextInput
                                    style={styles.hourStyle}
                                    value={String(schedule.hourEnd)}
                                    onChangeText={(text) => updateEndHour(Number(text), schedule)}
                                />
                                <Text style={{ fontSize: FontSize.size_lg, color: Color.darkGrey }}> : 00 </Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                                {daysAbbreviation.map((dayAbbreviation, dayIndex) => (
                                    <Text
                                        key={dayIndex}
                                        style={{
                                            color: isDayPresent(dayIndex, schedule.days) ? 'red' : Color.darkGrey,
                                            fontSize: FontSize.size_xs,
                                            paddingHorizontal: 3,
                                            paddingTop: 3,
                                        }}
                                        onPress={() => handleDayPress(dayIndex, schedule)}
                                    >
                                        {dayAbbreviation}
                                    </Text>
                                ))}
                            </View>
                        </LinearGradient>
                    </View>
                ))}
                <View style={styles.addSchedule}>
                    <Pressable>
                       <Text style={{paddingTop:5, color: Color.darkGrey}}>
                           +
                       </Text>
                    </Pressable>
                </View>

            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 80,
    },
    scheduleContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 25,
        borderRadius: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: Color.lightsteelblue,
        fontFamily: FontFamily.poppinsMedium,
    },
    scheduleTitle: {
        marginLeft: 20,
    },
    hourStyle: {
        fontSize: FontSize.size_lg,
        color: Color.darkGrey,
    },
    addSchedule: {
        width: 100,
        height: 30,
        marginTop: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Color.lightsteelblue,
        fontFamily: FontFamily.poppinsMedium,
        alignItems: 'center',
        alignSelf: 'center',
    }
});

export default SchedulesSettingsScreen;

