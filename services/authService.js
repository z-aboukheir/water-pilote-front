const API_URL = "http://localhost:3000/user";

async function registerUser(userData) {
  try {
    const response = await fetch(API_URL + "/sign-up", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          "Une erreur est survenue lors de l'enregistrement de l'utilisateur"
      );
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(
      "Un problème de connexion réseau est survenu"
    );
  }
}

async function loginUser(userData) {
  try {
    const response = await fetch(API_URL + "/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          "Une erreur est survenue lors de la connexion de l'utilisateur"
      );
    }
    const responseData = await response.json();
    const accessToken = responseData.accessToken;
    if (accessToken) {
    document.cookie = `accessToken=${responseData.accessToken}; expires=${new Date(
        responseData.expiresIn
    )}; secure;`;
    }
    return responseData;
  } catch (error) {
    throw new Error("un problème de connexion réseau est survenu");
  }
}


 const isLoggedIn = () => {
    // Obtention de tous les cookies de l'application
    const cookies = document.cookie.split(';');
    
    // Recherche du cookie contenant le token d'accès
    const accessTokenCookie = cookies.find(cookie => cookie.trim().startsWith('accessToken='));
  
    // Si le cookie du token d'accès est trouvé, cela signifie que l'utilisateur est connecté
    if (accessTokenCookie) {
      return true;
    } else {
      return false;
    }
  };

export { registerUser, loginUser, isLoggedIn };