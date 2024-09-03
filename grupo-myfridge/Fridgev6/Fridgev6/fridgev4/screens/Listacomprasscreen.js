import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Footer from './components/Footer';

export default function Lista() {
  
  const [items, setItems] = useState([

  ]);

  const [newItemName, setNewItemName] = useState('');

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = () => {
    if (newItemName.trim().length > 0) {
      const newItem = {
        id: (items.length + 1).toString(),
        name: newItemName,
        checked: false,
      };
      setItems([...items, newItem]);
      setNewItemName('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSearchButton = () => {
    // Lógica que você deseja implementar ao clicar nos botões do rodapé
    console.log("Botão do rodapé clicado!");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={[styles.itemText, item.checked && styles.itemChecked]}>
        {item.name}
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => toggleItem(item.id)} style={styles.checkButton}>
          <Text style={styles.checkButtonText}>✓</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeText}>X</Text>
        </TouchableOpacity>
      </View>
  
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://wallpapers.com/images/hd/best-food-background-qxixr8gu6oa91znb.jpg' }} // Substitua pela URL da sua imagem
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Minha lista de compras</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar novo item"
            value={newItemName}
            onChangeText={setNewItemName}
          />
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      
      </View>
      <Footer /> 
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // Ajusta a imagem para cobrir toda a tela
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Fundo semi-transparente para melhor leitura
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  itemChecked: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkButton: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#b3d9ff',
    borderRadius: 5,
  },
  checkButtonText: {
    fontSize: 18,
    color: '#007bff',
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#ffcccc',
    borderRadius: 5,
  },
  removeText: {
    fontSize: 18,
    color: 'red',
  },
 
});
