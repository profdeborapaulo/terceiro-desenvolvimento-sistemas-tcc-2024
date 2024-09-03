import { StyleSheet } from "react-native";
import { colors, height, width } from "./GStyle";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.07,
        paddingTop: width * 0.25,
        justifyContent: 'flex-start'
    },
    title: {
        textAlign: 'center',
        fontSize: 38,
        color: colors.pcian
    },
    dayContainer: {
        marginBottom: 10,
    },
    dayButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 30,
    },
    altDayButton:{
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    dayText: {
        color: '#000000',
        fontSize: 25,
    },
    collapsible: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        borderColor: '#000000',
        paddingHorizontal: 15,
        paddingTop: 13,
        paddingBottom: 28,
    },
    scheduleContainer: {
        padding: 22,
        backgroundColor: colors.pcian,
        borderRadius: 25
    },
    rows: {
        height: width * 0.8
    },
    textTable: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    }
});

export default styles;