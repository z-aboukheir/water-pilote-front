import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

// const API_KEY = "ba6dc7803337496b8c837c2beff3eaa2";
const API_KEY = "69e51d74a685081fc23e5d1188d95a16";


const LocationPicker = () => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
   
      
    const fetchLocations = async () => {
      if (query) {
        // const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        //   query
        // )}&countrycode=fr&limit=5&key=${API_KEY}`;
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          query
        )},fr&limit=5&appid=${API_KEY}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
        //   const locations = data.results.map((result) => ({
        //     name:
        //       result.components.city ||
        //       result.components.town ||
        //       result.components.village ||
        //       result.components.suburb,
        //     region: result.components.state || "",
        //     latitude: result.geometry.lat,
        //     longitude: result.geometry.lng,
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

        // const locations = data.map((result) => ({
        //     name: result.name,
        //     region: result.state || "",
        //     latitude: result.lat,
        //     longitude: result.lon,
        //   }));
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
    // setQuery(location.name);

    setSelectedLocation(location);
    // setLocations([]);

    // setQuery(`${location.name}, ${location.region}`);
    setShowResults(false);
  };

  //   const handleInputFocus = () => {
  //     setLocations(selectedLocation ? [selectedLocation] : []);
  //     setShowResults(true);

  //   };

  const handleInputBlur = () => {
    // setLocations([]);
    // if (!selectedLocation) {
    //     setQuery(''); // reset query if no location is selected
    //   }
    // setShowResults(false);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

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
    <View ref={wrapperRef}
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableWithoutFeedback onPress={() => setShowResults(true)}>
        <TextInput
          placeholder="Entrez une ville"
          value={selectedLocation ? selectedLocation.name : query}
          onChangeText={handleQueryChange}
          // onFocus={handleInputFocus}
          onFocus={() => setShowResults(true)}
          onBlur={handleInputBlur}
        />
      </TouchableWithoutFeedback>
      {showResults && locations.length > 0 && (
        <FlatList
          data={locations}
          renderItem={renderLocation}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default LocationPicker;
