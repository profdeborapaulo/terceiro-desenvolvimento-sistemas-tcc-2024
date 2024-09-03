import React, { useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function Screen01() {
  const scrollViewRef = useRef(null);

  // Funções de exemplo para os botões
  const handleFridgeButton = () => {
    console.log('Fridge button pressed');
  };

  const handleSearchButton = () => {
    console.log('Search button pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ImageBackground 
        source={require('../assets/inicial1.png')} 
        style={styles.backgroundImage}
      >
        <View style={styles.header}>
            <TouchableOpacity style={styles.fridgeButton} onPress={handleFridgeButton}>
              <View style={styles.fridgeButtonContent}>
                <Image 
                  source={require('../assets/favicon.png')} 
                  style={styles.fridgeIcon} 
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSearchButton}>
              <Image 
                source={require('../assets/pesquisa.png')} 
                style={styles.iconImage} 
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSearchButton}>
              <Image 
                source={require('../assets/config.png')} 
                style={styles.iconImage} 
              />
            </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.caixa1}>
            <Text style={styles.titulo}>Perto de vencimento:</Text>
            <Text style={styles.texto}>1. </Text>
            <Text style={styles.texto}>2. </Text>
            <Text style={styles.texto}>3. </Text>
          </View>

          <Text style={styles.Tituloreceita}>Receitas recomendadas</Text>

          <View style={styles.sliderContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.slide}>
                <Text style={styles.slideText}>Slide 1: Este é o primeiro slide.</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideText}>Slide 2: Este é o segundo slide.</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideText}>Slide 3: Este é o terceiro slide.</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideText}>Slide 4: Este é o quarto slide.</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <View style={styles.footer1}>
          <View style={styles.footerIcon}>
            <TouchableOpacity onPress={handleSearchButton}>
            <Image 
              source={require('../assets/recipe.png')} 
              style={styles.footerImage} 
            />
            </TouchableOpacity>
          </View>
          <View style={styles.footerIcon}>
            <TouchableOpacity onPress={handleSearchButton}>
            <Image 
              source={require('../assets/add.png')} 
              style={styles.footerImage} 
            />
            </TouchableOpacity>
          </View>
          <View style={styles.footerIcon}>
          <TouchableOpacity onPress={handleSearchButton}>
            <Image 
              source={require('../assets/cart.png')} 
              style={styles.footerImage} 
            />
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </View>
      </ImageBackground>
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
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    marginTop: 35,
  },
  fridgeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    marginRight: 'auto', 
    left:38,
    width: 72,
    height: 75,
  },
  fridgeButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fridgeIcon: {
    width: 47,
    height: 47,
  },
  iconButton: {
    paddingBottom: 10,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 390,
    paddingBottom: 190,
  },
  caixa1: {
    width: '85%',
    height: '20%',
    backgroundColor: '#F85920',
    opacity: 0.9,
    position: 'absolute',
    alignItems: 'center',
    top: '20%',
    borderRadius: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
    marginBottom: 28,
    top: 10,
    alignSelf: 'flex-start',
    left: 30,
  },
  texto: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
    alignSelf: 'flex-start',
    left: 35,
  },
  sliderContainer: {
    width: '97%',
    height: '95%',
    overflow: 'hidden',
  },
  Tituloreceita: {
    position: 'static',
    top: '54%',
    fontSize: 24,
    color: 'white',
    width: 'auto',
    maxWidth: '100%',
    alignSelf: 'flex-start',
    marginLeft: 55,
  },
  slide: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    left: 7,
    opacity: 0.9,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#F85920',
  },
  slideText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  }, 
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footer1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F85920',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  footerIcon: {
    alignItems: 'center',
  },
  footerImage: {
    width: 30,  // Largura da imagem
    height: 30, // Altura da imagem
  },
});
