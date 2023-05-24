import {
    Text,
    ScrollView,
    StyleSheet,
    View,
    Pressable,
    Image,
} from "react-native";
import {
    useEffect,
    useState
} from "react";
import Chart
    from "../components/Chart";
import Svg, { Path } from 'react-native-svg';
import BackButton
    from "../components/BackButton";
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
    fetchWithToken
} from "../services/fetchService";

const StatsScreen = () => {

    const [irrigationsData, setIrrigationsData] = useState([]);
    const navigation = useNavigation();

    const fetchData = async () => {
        try {
            const response = await fetchWithToken('http://127.0.0.1:3000/stats/irrigations', {
                method: 'GET',
            });

            if (response.ok) {
                console.log("ok")
                const responseData = await response.json();
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
    }, [fetchWithToken]);

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Pressable
                    onPress={() => navigation.goBack()}>
                    <Image style={{ width: 95, height: 95 }} source={require("../assets/back.png")}/>
                </Pressable>
                <Text style={styles.title}>Statistiques</Text>
            </View>
            {irrigationsData.length > 0 ?
                <Chart data={irrigationsData} /> :
                <Text>Pas de données disponibles pour les 14 derniers jours</Text>
            }
            {console.log(irrigationsData)}
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
        marginLeft: '-10%',
    },
    title: {
        fontSize: FontSize.size_13xl,
        color: Color.darkGrey,
        fontFamily: FontFamily.poppinsMedium,
        marginTop: -20,
    }
})
