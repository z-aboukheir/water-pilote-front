import React, { useState } from 'react';
import { Modal, Text, TextInput, View, Pressable } from 'react-native';

const ModalValveScreen = ({ setModalVisible, valveName, setValveName, valvePinPosition, setValvePinPosition, addValve }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 20 }}>
                    <Text style={{ marginBottom: 10 }}>Ajouter une Valve</Text>
                    <TextInput
                        placeholder="Nom de la valve"
                        value={valveName}
                        onChangeText={setValveName}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    />
                    <TextInput
                        keyboardType='numeric'
                        placeholder="Position du pin de la valve"
                        value={valvePinPosition}
                        onChangeText={(text) => {
                            if (!isNaN(text)) {
                                setValvePinPosition(text);
                            }
                        }}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Pressable
                            style={{ backgroundColor: '#2196F3', padding: 10, borderRadius: 5, flex: 1, marginRight: 5 }}
                            onPress={addValve}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Valider</Text>
                        </Pressable>
                        <Pressable
                            style={{ backgroundColor: 'red', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 }}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Annuler</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ModalValveScreen;
