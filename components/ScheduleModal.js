import React from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { Color } from "../GlobalStyles";
import Icon from "react-native-vector-icons/FontAwesome";

const ScheduleModal = ({ isVisible, handleSave, handleInputChange, newSchedule }) => {

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal visible={isVisible} onRequestClose={handleClose}>
            <View>
                <TouchableOpacity onPress={handleClose}>
                    <Icon
                        name="times"
                        size={25}
                        color={Color.darkGrey}
                        style={{ position: "absolute", top: 10, right: 10 }}
                    />
                </TouchableOpacity>
                <Text>Add new schedule</Text>
                <TextInput
                    placeholder="Valve id"
                    value={newSchedule.valveId}
                    onChangeText={(text) => handleInputChange("valveId", text)}
                />
                <TextInput
                    placeholder="Start hour"
                    value={newSchedule.hourStart}
                    onChangeText={(text) => handleInputChange("hourStart", text)}
                />
                <TextInput
                    placeholder="End hour"
                    value={newSchedule.hourEnd}
                    onChangeText={(text) => handleInputChange("hourEnd", text)}
                />
                <TextInput
                    placeholder="Days"
                    value={newSchedule.days}
                    onChangeText={(text) => handleInputChange("days", text)}
                />
                <Pressable onPress={handleSave}>
                    <Text>Save</Text>
                </Pressable>
            </View>
        </Modal>
    );
};

export default ScheduleModal;
