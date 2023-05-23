import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from "react-native";
import {
    Color,
    FontFamily,
    FontSize
} from "../GlobalStyles";
import {
    LinearGradient
} from "expo-linear-gradient";
import * as React
    from "react";


const Schedule = (props) => {
    const {schedule, updateStartHour, updateEndHour, handleDayPress, isDayPresent, daysAbbreviation} = props;
    return (
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
    )
}

export default Schedule;

const styles = StyleSheet.create ({
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
    }
})