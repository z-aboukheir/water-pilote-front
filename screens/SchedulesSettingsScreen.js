import * as React
    from "react";
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    TextInput,
    Modal,
    TouchableOpacity
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
import Schedule
    from "../components/Schedule";
import Icon
    from "react-native-vector-icons/FontAwesome";

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSchedule, setNewSchedule] = useState({});

    const handleAddSchedule = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSaveSchedule = () => {
        // Here you can add your code to save the new schedule
        setIsModalOpen(false);
    };

    const handleInputChange = (name, value) => {
        setNewSchedule({ ...newSchedule, [name]: value });
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
                    <Schedule
                        key={schedule.id}
                        schedule={schedule}
                        updateStartHour={updateStartHour}
                        updateEndHour={updateEndHour}
                        handleDayPress={handleDayPress}
                        isDayPresent={isDayPresent}
                        daysAbbreviation={daysAbbreviation}
                    />

                ))}
                <View style={styles.addSchedule}>
                    <Pressable onPress={handleAddSchedule}>
                       <Text style={{paddingTop:5, color: Color.darkGrey}}>
                           +
                       </Text>
                    </Pressable>
                </View>
                <Modal visible={isModalOpen} onRequestClose={handleModalClose}>
                    <View>
                        <TouchableOpacity onPress={handleModalClose}>
                            <Icon name="times" size={25} color={Color.darkGrey} style={{ position: 'absolute', top: 10, right: 10 }} />
                        </TouchableOpacity>
                        <Text>Add new schedule</Text>
                        <TextInput
                            placeholder="Valve id"
                            value={newSchedule.valveId}
                            onChangeText={(text) => handleInputChange('valveId', text)}
                        />
                        <TextInput
                            placeholder="Start hour"
                            value={newSchedule.hourStart}
                            onChangeText={(text) => handleInputChange('hourStart', text)}
                        />
                        <TextInput
                            placeholder="End hour"
                            value={newSchedule.hourEnd}
                            onChangeText={(text) => handleInputChange('hourEnd', text)}
                        />
                        <TextInput
                            placeholder="Days"
                            value={newSchedule.days}
                            onChangeText={(text) => handleInputChange('days', text)}
                        />
                        <Pressable onPress={handleSaveSchedule}>
                            <Text>Save</Text>
                        </Pressable>
                    </View>

                </Modal>

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

