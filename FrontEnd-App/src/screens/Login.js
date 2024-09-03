import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StatusBar } from 'react-native';
import { SLogin as tstyle, gstyle, colors, width } from '../styles';
import { LoginInput } from '../components';
import { BackButton } from '../../assets/svgs';

const Login = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [focused, setFocused] = useState(false);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(route.params?.selectedUser || 'student')

    useEffect(() => {
        // >VERIFICA SE O TECLADO ESTÁ VISÍVEL OU ESCONDIDO E MUDA O ESTADO DA VARIÁVEL 'keyboardVisible'
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

        return () => {
            // REMOVE OS OUVINTES
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleChangeUser = () => {
        setIsLoading(true);
        setTimeout(() => {
            setSelectedUser(prev => users[prev] || prev)
            setIsLoading(false);
        }, 400);
    };

    const handleChangePadding = (bool) => {
        setFocused(bool)
    }

    const users = {
        'student': 'responsible',
        'responsible': 'student'
    };

    if (isLoading) {
        return (
            <View style={tstyle.container}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
                <View style={[tstyle.containerTab, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator size="large" color={colors.pcian} />
                </View>
            </View>
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                setFocused(false)
            }}
            >
                <View style={[tstyle.container, focused && keyboardVisible === true ? { paddingTop: width * 0.29 } : null]}>
                    <TouchableOpacity style={[gstyle.goBackButton, tstyle.backButton]} onPress={() => navigation.goBack()}>
                        <BackButton circleColor={colors.icewhite}/>
                    </TouchableOpacity>
                    <View style={tstyle.containerTab}>
                        <View style={tstyle.intro}>
                            <Text style={[gstyle.bold, tstyle.title]}>Bem vindo!</Text>
                            <Text style={[gstyle.bold, tstyle.subtitle]}>Realize agora seu login!</Text>
                        </View>
                        <View style={tstyle.containerForm}>

                            <LoginInput showIcon={true} change={handleChangePadding} type='login' 
                            placeholder={selectedUser === 'student' ? 'RA' : 'Email'}
                            />
                            <LoginInput eye={true} showIcon={true} change={handleChangePadding} type='password' placeholder={'Senha'} />


                            <View style={tstyle.containerOptions}>
                                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ChangePassword')}>
                                    <Text style={[gstyle.bold, tstyle.forgotPassLink]}>Esqueceu a senha?</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={1} style={tstyle.button} onPress={() => navigation.navigate('Principal')}>
                                <Text style={[gstyle.bold, tstyle.buttonText]}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleChangeUser} activeOpacity={1}>
                                <Text style={[gstyle.bold, tstyle.changeLink]}>
                                    {selectedUser === 'student'? 'Fazer login como responsável' : 'Fazer login como aluno'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default Login;