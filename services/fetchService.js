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
  headers.set("Authorization", token);
  headers.set("Content-Type", "application/json");
  // headers.set('Accept', 'application/json');

  // Effectuez la requête avec le token
  return fetch(url, { ...options, headers });
}

export { fetchWithToken };

// Utilisez cette fonction pour toutes vos requêtes par exmple pour get : 
fetchWithToken("https://mon-api.com/ma-route", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw error;
    }
    return response.json();
  })
  .then((data) => {
    // Traitez les données reçues
  })
  .catch((error) => {
    console.log(error);
  });


// et pour Post :  

const data = {
  // Les données que vous souhaitez envoyer avec la requête POST
  // Par exemple : { name: 'John', email: 'john@example.com' }
};

fetchWithToken("https://mon-api.com/ma-route", { method: "POST",  body: JSON.stringify(data), })
  .then((response) => {
    if (!response.ok) {
      throw error;
    }
    return response.json();
  })
  .then((data) => {
    // Traitez les données reçues
  })
  .catch((error) => {
    console.log(error);
  });

  // récupérer les données à la fois lors du chargement initial du composant et lorsque l'on clique sur un bouton pour  mettre à jour les données
  // import React, { useContext, useEffect, useState } from 'react';
  // import { AuthContext } from './context/AuthContext';
  
  // const MyComponent = () => {
  //   const { fetchWithToken } = useContext(AuthContext);
  //   const [data, setData] = useState(null);
  
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchWithToken('https://example.com/api/data', {
  //         method: 'GET',
  //       });
  
  //       if (response.ok) {
  //         const responseData = await response.json();
  //         setData(responseData);
  //       } else {
  //         console.log('Erreur lors de la requête');
  //       }
  //     } catch (error) {
  //       console.log('Erreur de réseau:', error.message);
  //     }
  //   };
  
  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchWithToken]);
  
  //   const handleUpdateClick = () => {
  //     fetchData();
  //   };
  
  //   return (
  //     <div>
  //       <button onClick={handleUpdateClick}>Mettre à jour</button>
  //       {data ? (
  //         <div>
  //           {/* Afficher les données récupérées */}
  //           <pre>{JSON.stringify(data, null, 2)}</pre>
  //           {console.log(data)}
  //         </div>
  //       ) : (
  //         <div>Chargement des données...</div>
  //       )}
  //     </div>
  //   );
  // };
  
  // export default MyComponent;
  