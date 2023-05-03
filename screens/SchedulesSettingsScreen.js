import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {
  useState
} from "react";
import BackButton
  from "../components/BackButton";

const SchedulesSettingsScreen = () => {

  const navigation = useNavigation();
  const [schedules, setSchedules] = useState({
    1: {
      id: 1,
      days: [1, 4, 5],
      hourStart: 8,
      hourEnd: 10,
      idSettings: 1,
    },
    2: {
      id: 2,
      days: [2, 4, 6],
      hourStart: 9,
      hourEnd: 11,
      idSettings: 2,
    },
  });


  return (
      <View>
        <BackButton
            screenTitle={"Planification"}/>
        <View>
          {Object.values(schedules).map((schedule) => (
              <View
                  key={schedule.id}>
                <Text>{schedule.id}</Text>
                <Text>{schedule.days}</Text>
                <Text>{schedule.hourStart}</Text>
                <Text>{schedule.hourEnd}</Text>
                <Text>{schedule.idSettings}</Text>
              </View>
          ))}
        </View>
      </View>
  );
};
const styles = StyleSheet.create({

});

export default SchedulesSettingsScreen;

