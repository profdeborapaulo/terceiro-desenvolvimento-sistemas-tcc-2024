import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.footer}>
        <View style={styles.footer1}>
          <View style={styles.footerIcon}>
            <TouchableOpacity onPress={() => navigation.push('Receitas')}>
              <Image 
                source={require('../../assets/recipe.png')} 
                style={styles.footerImage} 
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerIcon}>
            <TouchableOpacity  onPress={() => navigation.push('FridgeScreen')}>
              <Image 
                source={require('../../assets/add.png')} 
                style={styles.footerImage} 
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerIcon}>
            <TouchableOpacity  onPress={() => navigation.push('Alimentos')}>
              <Image 
                source={require('../../assets/cart.png')} 
                style={styles.footerImage} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        backgroundColor: '#F85920', // Cor de fundo laranja
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 3, // Largura da borda
        borderColor: '#FFFFFF', // Cor da borda branca
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      footer1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      footerIcon: {
        alignItems: 'center',
      },
      footerImage: {
        width: 40,
        height: 40,
      },
    });
    
export default Footer;
