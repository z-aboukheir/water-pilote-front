import React from 'react';
import { Modal, Text, TextInput, View, Pressable, StyleSheet } from 'react-native';

const ModalValveScreen = ({ setModalVisible, valveName, setValveName, valvePinPosition, setValvePinPosition, addValve }) => {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Ajouter une Valve</Text>
                    <TextInput
                        placeholder="Nom de la valve"
                        value={valveName}
                        onChangeText={setValveName}
                        style={styles.inputField}
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
                        style={styles.inputField}
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, { backgroundColor: '#BCC604', marginRight: 10 }]}
                            onPress={addValve}
                        >
                            <Text style={styles.buttonText}>Valider</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, { backgroundColor: 'red', marginLeft: 10 }]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.buttonText}>Annuler</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)' // fond semi-transparent
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 20,
        shadowOffset: { width: 10, height: 10 }, // Ombre pour effet de parallaxe
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20
    },
    modalTitle: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 5,
        elevation: 3,  // Ombre pour Android
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default ModalValveScreen;
