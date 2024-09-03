import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/ImgReceitas2.jpg')} // Use require para arquivos locais em vez de uri
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Receitas</Text>
        </View>
      </ImageBackground>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        placeholderTextColor="#7f7f7f"
      />

      <TouchableOpacity style={styles.recommendedButton}>
        <Text style={styles.recommendedButtonText}>Receitas recomendadas</Text>
      </TouchableOpacity>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
            <Text style={styles.filterButtonText}>Trivial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Saladas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Simples</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.recipeContainer}>
        <View style={styles.recipeCard}>
          <Image style={styles.recipeImage} source={require('../assets/ImgReceitas1.jpg')} />
          <Text style={styles.recipeTitle}>Salada</Text>
          <Text style={styles.recipeDescription}>
            Para fazer uma salada nutritiva e realmente saudável, aposte em vegetais coloridos, folhas verdes escuras, e uma fonte de proteína
          </Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recipeCard}>
          <Image style={styles.recipeImage} source={{ uri: '../assets/ImgReceitas3.jpg' }} />
          <Text style={styles.recipeTitle}>Strogonoff</Text>
          <Text style={styles.recipeDescription}>
            O Strogonoff é um prato tradicional russo, com carne cozida em um molho cremoso de cogumelos e temperos.
          </Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Saiba mais</Text>
          </TouchableOpacity>
        </View>

        {/* Adicione mais cartões de receitas conforme necessário */}
      </ScrollView>

      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Deixe o fundo do restante da tela branco
  },
  headerBackground: {
    width: '100%',
    height: 120, // Ajuste a altura conforme necessário para cobrir a área do cabeçalho
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    margin: 20,
    padding: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
  },
  recommendedButton: {
    backgroundColor: '#FF6A00',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  recommendedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
  },
  activeFilter: {
    backgroundColor: '#FF6A00',
  },
  filterButtonText: {
    color: '#4A2900',
    fontWeight: 'bold',
  },
  recipeContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  recipeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A2900',
  },
  recipeDescription: {
    fontSize: 14,
    color: '#7f7f7f',
    marginVertical: 10,
  },
  learnMoreButton: {
    backgroundColor: '#FF6A00',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  learnMoreText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

