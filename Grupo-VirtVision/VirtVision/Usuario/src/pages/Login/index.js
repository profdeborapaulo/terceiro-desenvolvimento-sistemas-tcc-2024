import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, Animated} from 'react-native';
import styleLogin from '../../styles/login';


export default function Login() {

const [offset] = useState(new Animated.ValueXY({x: 0 , y: 80}));
const [logo] = useState(new Animated.ValueXY({x:170, y:195}));

useEffect(() => {
  Animated.spring(offset.y, {
    toValue: 0,
    speed: 4,
    useNativeDriver: true
  }).start();
}, []);


  return (
    <KeyboardAvoidingView style={styleLogin.background}>

      <View style={styleLogin.containerLogo}>
        <Animated.Image 
        style={{width: logo.x, height: logo.y}}
        source={require('./src/img/logo.png')}
       />
      </View>

      <Animated.View
       style={[
        styles.container,
        {
          transform:[
            {translateY: offset.y }
          ]
        }
        ]}>
        <TextInput 
        style={styleLogin.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() => {}}/>
        


        <TextInput 
          style={styleLogin.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => {}}
/>

<TouchableOpacity style={styleLogin.btnSubmit}>
  <Text style={styleLogin.submitText}>Acessar</Text>
</TouchableOpacity>

<TouchableOpacity style={styleLogin.btnRegister}>
  <Text style={styleLogin.registerText}>Criar conta gratuita</Text>
</TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
  )
}

