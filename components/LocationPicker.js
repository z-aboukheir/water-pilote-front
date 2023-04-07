import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import InputForm from "./InputForm";
import { ScrollView } from "react-native-web";


const apiKey = "69e51d74a685081fc23e5d1188d95a16"



const LocationPicker = () => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      if (query) {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )},fr&limit=5&appid=${apiKey}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          const locations = [];
          const seen = new Set();
          data.forEach((result) => {
            const { name, state, lat, lon } = result;
            const fullName = `${name}, ${state}`;
            if (!seen.has(fullName)) {
              locations.push({
                name,
                region: state || "",
                latitude: lat,
                longitude: lon,
              });
              seen.add(fullName);
            }
          });
          setLocations(locations);
          setShowResults(true);
        } catch (error) {
          console.error(error);
        }
      } else {
        setLocations([]);
      }
    };
    fetchLocations();
  }, [query]);

  const handleQueryChange = (text) => {
    setQuery(text);
    setSelectedLocation(null);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowResults(false);
  };

  const renderLocation = ({ item }) => (
    <TouchableOpacity
      style={{ paddingVertical: 8 }}
      onPress={() => handleLocationSelect(item)}
    >
      <Text>{item.name}</Text>
      {item.region && item.name ? (
        <Text style={{ color: "#666" }}>{item.region}</Text>
      ) : null}
    </TouchableOpacity>
  );

  return (
<View>
      <InputForm
        icon="globe"
        placeholder="Entrez une ville"
        onChangeText={handleQueryChange}
        value={
          selectedLocation
            ? `${selectedLocation.name}, ${selectedLocation.region}`
            : query
        }
        onFocus={() => setShowResults(true)}
      />
      {showResults && locations.length > 0 && (
        <FlatList
          data={locations}
          renderItem={renderLocation}
          keyExtractor={(item, index) => index.toString()}
          style={{
            marginLeft: 45,
            marginRight: 20,
            paddingLeft: 10,
            backgroundColor: "#E8E8E8",
          }}
        />
      )}
    </View>
  );
};

export default LocationPicker;