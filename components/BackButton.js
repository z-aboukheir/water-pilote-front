import {
    Color,
    FontFamily,
    FontSize
} from "../GlobalStyles";
import {
    useNavigation
} from "@react-navigation/native";

const {
    View,
    Pressable,
    Image,
    Text,
    StyleSheet
} = require("react-native");
const React = require("react");

const BackButton = ( props ) => {
    const { screenTitle} = props;
    const navigation = useNavigation();
    return (
    <View
        style={styles.container}>
        <Pressable
            onPress={() => navigation.goBack()}>
            <Image
                style={{
                    width: 95,
                    height: 95
                }}
                source={require("../assets/back.png")}/>
        </Pressable>
        <Text
            style={styles.title}>{screenTitle}</Text>
    </View>
    )
}


export default BackButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 45,
        paddingBottom: 80,
    },
    title: {
        fontSize: FontSize.size_13xl,
        color: Color.darkGrey,
        fontFamily: FontFamily.poppinsMedium,
        marginTop: -20,
    }

})