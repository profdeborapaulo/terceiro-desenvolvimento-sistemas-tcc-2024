import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StatusBar, Keyboard } from 'react-native';
import { SLogin as lstyle, gstyle, width, colors } from '../styles';
import { LoginInput } from '../components';
import { BackButton } from '../../assets/svgs';

const ChangePassword = ({navigation}) => {

    const [focused, setFocused] = useState(false);
    const [keyboardVisible, setKeyboardVisible] = useState(false);
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
    const handleChangePadding = (bool) => {
        setFocused(bool)
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
                setFocused(false)
            }}
            >
                <View style={[lstyle.container, focused && keyboardVisible === true ? { paddingTop: width * 0.1 } : null]}>
                    <TouchableOpacity style={[gstyle.goBackButton, lstyle.backButton]} onPress={() => navigation.goBack()}>
                        <BackButton circleColor={colors.icewhite}/>
                    </TouchableOpacity>
                    <View style={[lstyle.containerTab, focused && keyboardVisible === true ? { paddingTop: width * 0.145 } : null]}>
                        <View style={[lstyle.containerForm, { justifyContent: 'space-between' }]}>
                            <Text style={[gstyle.bold, lstyle.title, { marginBottom: width * 0.1 }]}>Alterar Senha</Text>
                            <View style={lstyle.containerAllInputs}>
                                <LoginInput change={handleChangePadding} type='login' placeholder={'Login'} />
                                <LoginInput change={handleChangePadding} eye={true} type='password' placeholder={'Senha atual'} />
                                <LoginInput change={handleChangePadding} eye={true} type='password' placeholder={'Nova senha'} />
                                <LoginInput change={handleChangePadding} type='password' placeholder={'Confirme sua senha'} />
                            </View>
                            <TouchableOpacity activeOpacity={1} style={lstyle.button} onPress={() => navigation.navigate('Principal')}>
                                <Text style={[gstyle.bold, lstyle.buttonText]}>Mudar senha</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default ChangePassword