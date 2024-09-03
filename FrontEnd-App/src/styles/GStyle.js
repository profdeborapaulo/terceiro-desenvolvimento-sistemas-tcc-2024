import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');


const colors = {
    pcian: '#087E8B',
    pcianalt: '#0FACAB',
    pcianopa: '#CEE5E8',
    darkblue: '#050D2E',
    babyblue: '#6C8BB5',
    strongbabyblue:'#3b639b',
    babybluealt: '#BACFEC',
    icewhite: '#EBF4FF',
    icewhitealt: '#D3E6FF',
    gray: '#4E535A',
    yellow: '#EBAA2C',
    offwhite: '#F0F0F0',
    purple: '#4F44CA',
}

const GStyle = StyleSheet.create({
    regular:{
        fontFamily: 'Montserrat_400Regular'
    },
    bold:{
        fontFamily: 'Montserrat_700Bold'
    },
    goBackButton:{
        width: 40, 
        height: 41, 
        backgroundColor: 'transparent', 
    }
});

export {GStyle, colors, width, height};