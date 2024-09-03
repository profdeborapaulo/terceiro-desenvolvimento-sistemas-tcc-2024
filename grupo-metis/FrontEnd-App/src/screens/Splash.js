import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyle as styles, colors } from '../styles';
import { SplashLogo, SplashText } from '../../assets/svgs';

const SplashScreen = ({ navigation }) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Switch');
        }, 
        // 
        1000
        );
        // TENTAR COLOCAR O TEMPO DE CARREGAMENTO DAS FONTES AQUI DEPOIS
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.pcian}}>
            <SplashLogo width="250" height="200" viewBox="0 0 220 100"/>
            <SplashText width="300" height="150" viewBox="0 0 310 130"/>
        </View>
    );
};
export default SplashScreen;