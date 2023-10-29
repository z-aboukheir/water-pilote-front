import Constants from 'expo-constants';

export const fetchLocations = async (query) => {
  if (!query) return [];

  const API_KEY = Constants.manifest.extra.METEO_APP_API_KEY;

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    query
  )},fr&limit=5&appid=${API_KEY}`;

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
    return locations;
  } catch (error) {
    console.error(error);
    return [];
  }
};
