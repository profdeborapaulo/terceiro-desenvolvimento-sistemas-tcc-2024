import { StyleSheet } from "react-native";
import { colors, width, height } from "./GStyle";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        flex: 0,
        alignSelf: 'stretch',
        marginBottom: width * 0.2,
        textAlign: 'center',
        fontSize: 40,
        color: colors.pcian
    },
    topSpot:{
        position: 'absolute',
        top: 0,
        left: 0
    },
    bottomSpot:{
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    girlSvg: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    containerButtons: {
        flex: 0, alignSelf: 'stretch'
    },
    button: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 50,
        paddingVertical: width * 0.04,
        backgroundColor: colors.pcianalt,
    },
    textButton: {
        width: '100%',
        textAlign: 'center',
        fontSize: 22,
        color: '#f0f0f0',
    }
});

export default styles;