import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require('../assets/telacadastro.png')}
      />
      <View style={styles.formContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Cadastro MyFridge</Text>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Username'
              placeholderTextColor={'gray'}
              style={styles.textInput}
              underlineColorAndroid="transparent" // Remove underline (Android)
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email'
              placeholderTextColor={'gray'}
              secureTextEntry
              style={styles.textInput}
              underlineColorAndroid="transparent" // Remove underline (Android)
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'gray'}
              secureTextEntry
              style={styles.textInput}
              underlineColorAndroid="transparent" // Remove underline (Android)
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.push('FridgeScreen')}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text>Não possui conta?</Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text style={styles.signupText}>Crie uma conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    letterSpacing: 1,
  },
  form: {
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 12,
  },
  inputContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 16,
    margin: 10,
    borderRadius: 12,
    width: '100%',
  },
  textInput: {
    color: 'black',
    fontSize: 16,
    borderBottomWidth: 1, // Linha embaixo do TextInput
    borderBottomColor: 'gray',
    paddingVertical: 8,
    outlineStyle: 'none', // Remove outline
  },
  buttonContainer: {
    width: '100%',
    paddingTop: 8,
  },
  loginButton: {
    backgroundColor: '#38BDF8',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#38BDF8',
    marginLeft: 4,
  },
});
