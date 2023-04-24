import {
    Text,
    ScrollView,
    StyleSheet,
} from "react-native";
import {
    useEffect,
    useState
} from "react";
import Chart
    from "../components/Chart";
import Svg, { Path } from 'react-native-svg';

const StatsScreen = () => {

    const [irrigationsData, setIrrigationsData] = useState([]);

    const getIrrigationsData = async () => {
        const response = await fetch('http://localhost:3000/stats/irrigations');
        const data = await response.json();

        const convertedData = [];

        Object.entries(data).forEach(([electroValve, irrigationObj]) => {
            Object.entries(irrigationObj).forEach(([date, value]) => {
                convertedData.push({ electroValve, date, value });
            });
        });
        data && setIrrigationsData(convertedData);
    }

    useEffect(() => {
        getIrrigationsData();
    }, []);

    return (
        <ScrollView style={styles.mainContainer}>
            <Text style={{fontSize: 30, paddingBottom: 40}}>Statistiques</Text>
            {irrigationsData.length > 0 &&
                <Chart
                    data={irrigationsData} />}
            {console.log(irrigationsData)}
        </ScrollView>
    )
}

export default StatsScreen

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 100,
        paddingHorizontal: "10%",
        alignContent: "center",
    },
})
