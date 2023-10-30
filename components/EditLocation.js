import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import AuthContext from "./services/AuthContext";
import LocationContext from "./services/LocationContext";

const EditLocation = () => {
  const { user } = useContext(AuthContext);
  const { location } = useContext(LocationContext);
  const { updateLocation } = useContext(AuthContext);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationUpdate = async () => {
    if (selectedLocation) {
      try {
        await updateLocation(selectedLocation);
        alert("Localisation mise à jour avec succès");
      } catch (error) {
        alert("Erreur lors de la mise à jour de la localisation");
      }
    } else {
      alert("Veuillez choisir une nouvelle localisation");
    }
  };

  return (
    <View>
      <Text>Bonjour {user.username}!</Text>
      <Text>Votre ville sélectionnée est: {location.name}</Text>
      <LocationPicker
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <Pressable style={styles.button} onPress={handleLocationUpdate}>
        <Text style={styles.buttonText}>Mettre à jour la localisation</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
