import {API_URL} from "@env"


const login = async (password, email) => {
  try {
    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({password, email }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          "la combinaison mot de passe/email est incorrect"
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error
  }
}
 const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/user/sign-up`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          "Une erreur est survenue lors de l'inscription'"
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error;
  }
}



export { login, register};
