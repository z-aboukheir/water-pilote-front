import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import InputForm from "./InputForm";
import { fetchLocations } from "../services/locationServices";
import { Color } from "../GlobalStyles";

const LocationPicker = ({ selectedLocation, setSelectedLocation}) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const handleQueryChange = async (text) => {
    setQuery(text);
    setSelectedLocation(null);
    try {
      const fetchedLocations = await fetchLocations(text);
      if (fetchedLocations) {
        setLocations(fetchedLocations);
        setShowResults(fetchedLocations.length > 0);
      } else {
        throw error;
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des emplacements :",
        error
      );
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowResults(false);
    // console.log("location failed");
  };

  const renderLocation = ({ item }) => (
    <Pressable
      style={{ paddingVertical: 8 }}
      onPress={() => handleLocationSelect(item)}
    >
      <Text>{item.name}</Text>
      {item.region && item.name ? (
        <Text style={{ color: "#666" }}>{item.region}</Text>
      ) : null}
    </Pressable>
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
        // onBlur={() => {
        //   validateSelectedLocation(location);
        // }} 
      />

      {showResults && locations.length > 0 && (
        <ScrollView
          horizontal={true}
          style={{
            width: "100%",
            backgroundColor: Color.white,
            borderBottomLeftRadius: 36,
            borderBottomRightRadius: 36,
            marginTop: -30,
            shadowColor: "#9f9f9f",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 5,
            padding: 15,
            paddingTop: 45,
            zIndex: -2,
          }}
        >
          <FlatList
            data={locations}
            renderItem={renderLocation}
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="handled"
          />
        </ScrollView>
      )}
    </View>
  );
};

export default LocationPicker;
