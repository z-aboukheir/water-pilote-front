import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const iconName = options.tabBarIconName;
                const iconColor = isFocused ? "#4B4FE4" : "#C4C4C4";

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <Ionicons
                        key={route.key}
                        name={iconName}
                        size={30}
                        color={iconColor}
                        style={styles.tabIcon}
                        onPress={onPress}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        height: 60,
        backgroundColor: "#F9F9F9",
        borderTopWidth: 1,
        borderTopColor: "#E0E0E0",
        justifyContent: "space-around",
        alignItems: "center",
    },
    tabIcon: {
        alignSelf: "center",
    },
});
