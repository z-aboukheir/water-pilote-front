import {
    Text,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import {
    useContext,
    useEffect,
    useState
} from "react";
import Chart
    from "../components/Chart";
import * as React
    from "react";
import {
    Color,
    FontFamily,
    FontSize
} from "../GlobalStyles";
import {
    useNavigation
} from "@react-navigation/native";
import {
    AuthContext
} from "../context/AuthContext";

const StatsScreen = () => {

    const [irrigationsData, setIrrigationsData] = useState([]);
    const navigation = useNavigation();
    const { fetchWithToken } = useContext(AuthContext);

    const fetchData = async () => {
        try {
            const response = await fetchWithToken('http://127.0.0.1:3000/stats/irrigations', {
                method: 'GET',
            });
            console.log(response)
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
                setIrrigationsData(responseData);
            } else {
                console.log('Erreur lors de la requête');
            }
        } catch (error) {
            console.log('Erreur de réseau:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, 
    [fetchWithToken]
    );

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Statistiques</Text>
            </View>

             {irrigationsData && irrigationsData.length > 0 ? (
        <Chart data={irrigationsData} />
    ) : (
        <Text style={styles.noDataText}>Aucune statistique ces 14 derniers jours</Text>
    )}
        </ScrollView>
    )
}

export default StatsScreen

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: "10%",
        alignContent: "center",
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 45,
        paddingBottom: 60,
        // marginLeft: '-10%',
    },
    title: {
        fontSize: FontSize.size_13xl,
        color: Color.darkGrey,
        fontFamily: FontFamily.poppinsMedium,
        marginTop: -20,
    },
    noDataText: {
        fontSize: 16, 
        // color: 'red', 
        fontWeight: 'bold',
        textAlign: 'center', 
        marginTop: 20, 
    },
})