import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native';
import Footer from './components/Footer';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Alimentos() {
  const [quantity, setQuantity] = useState(1);
  const [registerDate, setRegisterDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [showRegisterPicker, setShowRegisterPicker] = useState(false);
  const [showExpiryPicker, setShowExpiryPicker] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const onRegisterDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || registerDate;
    setShowRegisterPicker(Platform.OS === 'ios');
    setRegisterDate(currentDate);
  };

  const onExpiryDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || expiryDate;
    setShowExpiryPicker(Platform.OS === 'ios');
    setExpiryDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://wallpapers.com/images/hd/best-food-background-qxixr8gu6oa91znb.jpg' }}
        style={styles.imageBackground}
      >
        <Text style={styles.title}>Adicione um alimento</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png' }}
            style={styles.cameraIcon}
          />
        </View>
      </ImageBackground>

      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Localização</Text>
          <Text style={styles.value}>Congelador</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Quantidade</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Data de registro</Text>
          <TouchableOpacity onPress={() => setShowRegisterPicker(true)}>
            <Text style={styles.editableValue}>{registerDate.toLocaleDateString()} Editar</Text>
          </TouchableOpacity>
          {showRegisterPicker && (
            <DateTimePicker
              value={registerDate}
              mode="date"
              display="default"
              onChange={onRegisterDateChange}
            />
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Data de validade</Text>
          <TouchableOpacity onPress={() => setShowExpiryPicker(true)}>
            <Text style={styles.editableValue}>{expiryDate.toLocaleDateString()} Editar</Text>
          </TouchableOpacity>
          {showExpiryPicker && (
            <DateTimePicker
              value={expiryDate}
              mode="date"
              display="default"
              onChange={onExpiryDateChange}
            />
          )}
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma descrição"
        />

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <Footer /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageBackground: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#007bff',
    marginTop: 10,
  },
  cameraIcon: {
    width: 50,
    height: 50,
    tintColor: '#888',
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  editableValue: {
    fontSize: 16,
    color: '#007bff',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#ff7f50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
