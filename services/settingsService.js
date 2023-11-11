import { API_URL } from "@env";

//  valves settings
export default async function updateValve(
  id,
  param,
  attribute,
  fetchWithToken
) {
  const valveValue = {
    [param]: attribute,
  };

  try {
    const response = await fetchWithToken(`${API_URL}/electrovalve/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valveValue),
    });
    // if (!response.ok) {
    //   // Traiter la réponse non réussie
    //   return response.json().then((err) => {
    //     throw new Error(err.message);
    //   });
    // }

    return response;
  } catch (error) {
    //   console.error("Erreur:", error.message);
    throw error
  }
}
