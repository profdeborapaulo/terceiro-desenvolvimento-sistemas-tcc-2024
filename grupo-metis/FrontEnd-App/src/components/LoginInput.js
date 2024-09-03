import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Keyboard } from 'react-native';
import { width, gstyle, colors } from '../styles';
import SvgImage from './SvgImage';

const LoginInput = ({ placeholder, type, change, showIcon, eye }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const handlePasswordVisibilityChange = () => setPasswordVisible(prev => !prev);

    const loginInput = useRef(null);
    const passwordInput = useRef(null);
    const decision = type === 'login';
    return (
        <TouchableOpacity
            style={[styles.containerInput, { marginBottom: width * 0.1 }]} activeOpacity={1}
            onPress={() => {
                if(decision){
                    loginInput.current.focus()
                }else{
                    passwordInput.current.focus()
                }
            }}
        >
            {showIcon?<SvgImage color={colors.pcian} width={32} height={32} svgName={decision ? 'person' : 'lock'} />:null}
            <TextInput
                onFocus={()=>change? change(true) : null}
                ref={decision ? loginInput : passwordInput}
                placeholder={placeholder}
                placeholderTextColor={colors.gray}
                style={[gstyle.bold, styles.textInput, !decision ? {paddingRight: width * 0.03} : null]}
                secureTextEntry={decision? false : !isPasswordVisible}
                autoCorrect={decision? true : false}
                autoCapitalize='none'
                keyboardType={
                    decision ? placeholder === 'RA' ? 'numeric' : 'email-address'
                    : isPasswordVisible ? "visible-password" : "default"
                }
            />
            {!decision && eye ?
                <TouchableOpacity activeOpacity={1} onPress={handlePasswordVisibilityChange}>
                    <SvgImage color={colors.pcian} width={32} height={32} svgName='eye' />
                </TouchableOpacity>
                : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        flex: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: width * 0.03,
        paddingHorizontal: width * 0.05,
        borderRadius: 10,
        backgroundColor: colors.icewhitealt
    },
    textInput: {
        flex: 1,
        color: colors.gray,
        fontSize: 17,
        borderWidth: 0,
        marginLeft: '5%',
        borderColor: 'transparent',
        outlineStyle: 'none',
    }
})

export default LoginInput;