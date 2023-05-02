import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard, ScrollView
} from "react-native";
import InputForm from "./InputForm";
import { fetchLocations } from "../services/locationServices";


const LocationPicker = ({ selectedLocation, setSelectedLocation }) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showResults, setShowResults] = useState(false);



  const handleQueryChange = async (text) => {
    setQuery(text);
    setSelectedLocation(null);
    const fetchedLocations = await fetchLocations(text);
    setLocations(fetchedLocations);
    setShowResults(fetchedLocations.length > 0);
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
        backgroundColor: '#fff',
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        marginTop: -30,
        shadowColor: '#9f9f9f',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
        padding: 15,
        paddingTop:45,
        zIndex: -2      
            }}
           keyboardShouldPersistTaps="handled"

          />
          
      )}
    </View>
  );
};

{/* <ScrollView 
keyboardShouldPersistTaps="handled"
style={{
  backgroundColor: "#fff",
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
{locations.map((item, index) => (
  <TouchableOpacity
    key={index.toString()}
    style={{ paddingVertical: 8 }}
    onPress={() => handleLocationSelect(item)}
  >
    <Text>{item.name}</Text>
    {item.region && item.name ? (
      <Text style={{ color: "#666" }}>{item.region}</Text>
    ) : null}
  </TouchableOpacity>
))}
</ScrollView>
)}
</View>
);
};*/}

export default LocationPicker;
