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
  headers.set("Authorization", "Bearer "+ token);
  headers.set("Content-Type", "application/json");
  headers.set('Accept', 'application/json');

  // Effectuez la requête avec le token
  return fetch(url, { ...options, headers });
}

export { fetchWithToken };
