import { getToken } from "./tokenService";

async function fetchWithToken(url, options, setIsAuthenticated) {
  // Récupérez le token depuis le secure store
  const token = await getToken();
  if (!token) {
      setIsAuthenticated(false); // Met à jour la valeur de isAuthenticated à false dans le contexte
      throw new Error("Token expired or not available");
  }

  // Ajoutez le token aux en-têtes de la requête
  const headers = new Headers(options.headers || {});
  headers.set("Authorization", "Bearer " + token);
  headers.set("Content-Type", "application/json");
  headers.set('Accept', 'application/json');

  try {
      // Effectuez la requête avec le token
      const response = await fetch(url, { ...options, headers });

      // Vérifiez si la réponse est réussie
      if (!response.ok) {
          // vérifier des cas spécifiques, par exemple, un token expiré
          // if (response.status === 401) {
          //     setIsAuthenticated(false);
          // }
          // Récupérez le message d'erreur du serveur et lancez une erreur
          const errorBody = await response.json();
          throw new Error(errorBody.message || "une erreur est survenue");
      }

      return response
  } catch (error) {
      // Gérez les erreurs de réseau ou les erreurs renvoyées par la fonction throw ci-dessus
      // console.error('Fetch with token failed:', error.message);
      throw error; // Relayez l'erreur pour une gestion ultérieure
  }
}


export { fetchWithToken };
