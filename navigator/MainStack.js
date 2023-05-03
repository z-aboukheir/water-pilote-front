import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen
    from "../screens/HomeScreen";
import WateringSettingsScreen
    from "../screens/WateringSettingsScreen";
import ValvesSettingsScreen
    from "../screens/ValvesSettingsScreen";
import MainTab
    from "./MainTab";
import SchedulesSettingsScreen
    from "../screens/SchedulesSettingsScreen";



const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ValvesSettingsScreen" component={ValvesSettingsScreen} />
            <Stack.Screen name="WateringSettingsScreen" component={WateringSettingsScreen} />
            <Stack.Screen name="SchedulesSettingsScreen" component={SchedulesSettingsScreen} />
        </Stack.Navigator>
    );
}

export default MainStack;