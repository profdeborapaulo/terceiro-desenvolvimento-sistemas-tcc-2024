import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

export default function Lista() {
  const [items, setItems] = useState([
    { id: '1',  name: 'Banana', checked:true},
    { id: '2',  name: 'Cenoura', checked:true},
    { id: '3',  name: 'Arroz', checked:false},
    { id: '4',  name: 'Tomate', checked:false},
    { id: '5',  name: 'Leite', checked:true},
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
    <View style={styles.screenContainer}>
      <ImageBackground
        source={{ uri: 'https://wallpapers.com/images/hd/best-food-background-qxixr8gu6oa91znb.jpg' }}
        style={styles.headerBackground}
      >
        <Text style={styles.headerText}>Minha lista de compras</Text>
      </ImageBackground>

      <View style={styles.listContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  listContainer: {
    flex: 1,
    marginTop: -30, // Ajusta para sobrepor a imagem de fundo
    
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: '100%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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
    padding: 8,
    backgroundColor: '#A9B3BD',
    borderRadius: 5,
  },
  checkButtonText: {
    fontSize: 18,
    color: '#000000',
  },
  removeButton: {
    padding: 8,
    backgroundColor: '#ffcccc',
    borderRadius: 5,
  },
  removeText: {
    fontSize: 18,
    color: 'red',
  },
});
