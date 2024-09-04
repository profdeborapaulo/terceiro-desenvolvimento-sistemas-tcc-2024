import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require('../assets/myfridge1.png')}
      />

      <View style={styles.content}>
        {/* Title */}

        {/* Buttons */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F3741F' }]} onPress={() => navigation.push('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F3741F' }]} onPress={() => navigation.push('SignUp')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 500,
    paddingBottom: 190,
  },
  button: {
    backgroundColor: '#F3741F',
    paddingHorizontal: '15px',
    paddingVertical: '10px',
    marginTop: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  createAccountText: {
    marginRight: 5,
  },
  createAccountLink: {
    color: '#00BFFF',
    fontWeight: 'bold',
  },
});
