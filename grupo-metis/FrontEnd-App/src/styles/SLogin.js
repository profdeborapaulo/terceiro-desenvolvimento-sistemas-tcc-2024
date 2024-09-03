import { StyleSheet } from "react-native";
import { colors, height, width } from "./GStyle";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pcian,
        paddingTop: width * 0.45
    },
    backButton:{
        position: 'absolute', 
        top: width * 0.15, 
        left: width * 0.05
    },
    containerTab: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: width * 0.3,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        backgroundColor: colors.icewhite,
    },
    containerForm: {
        flex: 0,
        alignSelf:'stretch',
        flexDirection: 'column',
        paddingHorizontal: width * 0.1
    },
    intro: {
        flex: 0,
        alignSelf: 'stretch',
        marginBottom: width * 0.15
    },
    title: {
        fontSize: 45,
        color: colors.pcian,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.babyblue,
    },
    containerAllInputs: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'column',
    },
    containerOptions: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: width * 0.1
    },
    rememberMeOption: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rememberMeText: {
        fontSize: width * 0.032,
        color: colors.pcian
    },
    forgotPassLink:{
        fontSize: width * 0.032,
        color: colors.pcian,
        textDecorationLine: 'underline',
        textDecorationColor: colors.pcian
    },
    button:{
        alignItems: 'stretch',
        backgroundColor: colors.pcian,
        borderRadius: 50,
        paddingVertical: '4%',
        marginBottom: width * 0.1
    },
    buttonText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 22,
        color: "#FFFFFF",
    },
    changeLink: {
        width: '100%',
        alignSelf: 'flex-end',
        textAlign: 'center',
        color: colors.pcian,
        textDecorationLine: 'underline',
        textDecorationColor: colors.pcian,
    }
});

export default styles;