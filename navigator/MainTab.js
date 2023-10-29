import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import ValvesSettingsScreen from '../screens/ValvesSettingsScreen';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <View style={styles.mainContainer}>
            <Tab.Navigator
                initialRouteName={"Home"}
                screenOptions={{
                    tabBarStyle: styles.tabBarStyle
                }}>
                <Tab.Screen name="Stats" component={StatsScreen} options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "stats-chart" : "stats-chart-outline"}
                            size={30}
                            color={focused ? "#BCC604" : "#C5C5C5"}
                            // style={{ marginBottom: -45 }}
                        />
                    )
                }} />
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false,
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={styles.tabBarButton}>
                            <LinearGradient
                                colors={['#F2FF00', '#BCC604']}
                                style={styles.gradient}>
                                <Ionicons name="home" size={25} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>
                    )
                }} />
                <Tab.Screen name="Valve Settings" component={ValvesSettingsScreen} options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "settings" : "settings-outline"}
                            size={30}
                            color={focused ? "#BCC604" : "#C5C5C5"}
                            // style={{ marginBottom: -45 }}
                        />
                    )
                }} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor : "transparent",
    },
    tabBarStyle: {
        borderRadius : 20,
        position: "absolute",
        bottom: 35,
        left: 35,
        right: 35,
        height: 60,
    },
    tabBarButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 15,
        borderStyle: 'solid',
        borderWidth: 3,

    },
    gradient: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainTab;
