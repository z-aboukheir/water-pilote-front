import {API_URL} from "@env"

//  valves settings 
export default async function  updateValve (id, param, 
    attribute, fetchWithToken) {


        const valveValue = {
            [param] : attribute,
        }
        
        try {
            const response = await fetchWithToken(`${API_URL}/electrovalve/${id}`, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(valveValue)
            });
            
           return (response)
        } catch (error) {
            console.error('Erreur:', error);
        }
};


