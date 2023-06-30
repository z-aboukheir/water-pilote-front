import React from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {StyleSheet} from "react-native";

const screenWidth = Dimensions.get('window').width * 0.8;

const chartConfig = {
    backgroundGradientFrom: "#D6E3F3",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(205, 214, 34, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    decimalPlaces: 0,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelFontSize: 9,
};

const createDataSets = (apiData) => {
    const electroValves = Object.keys(apiData);
    const datasets = [];
    const last14Days = Object.values(apiData).map(values => Object.entries(values).slice(-14));
    const labels = last14Days.length > 0 ? last14Days[0].map(([date]) => date) : [];

    electroValves.forEach((electroValve, index) => {
        const cropData = last14Days[index];

        const dataset = {
            data: cropData.map(([, value]) => parseInt(value)),
            color: (opacity = 1) => `rgba(205, 214, 34, ${opacity})`,
            electroValve: electroValve,
        };
        datasets.push(dataset);
    });
    return { datasets, labels };

};
const Chart = ({ data }) => {

    const {datasets, labels} = createDataSets(data);
    return (
        <View style={styles.container}>
            {datasets.map((dataset, index) => (
                <View key={index}>
                    <Text style={{paddingBottom: 20, fontSize: 18}}>{dataset.electroValve}</Text>
                    <LineChart
                        data={{ datasets: [dataset], labels }}
                        width={screenWidth}
                        height={300}
                        chartConfig={chartConfig}
                        verticalLabelRotation={45}
                        style={{
                            borderRadius: 25,
                            paddingBottom: 20,
                        }}
                        bezier
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Chart;