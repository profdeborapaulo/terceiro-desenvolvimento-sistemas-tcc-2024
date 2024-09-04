import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Biblioteca de ícones
import Footer from './components/Footer';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const FridgeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Fridge</Text>
                <View style={styles.headerIcons}>
                    <Icon name="search" size={30} color="#fff" />
                    <Icon name="ellipsis-v" size={30} color="#fff" style={styles.iconMargin} />
                </View>
            </View>

            {/*  Navegação entre geladeira e freezer */}
            <View style={styles.navTabs}>
                <TouchableOpacity style={styles.navTab} onPress={() => navigation.push('Geladeira')}>
                    <Icon name="th-large" size={40} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navTab} onPress={() => navigation.push('Freezer')}>
                    <Icon name="snowflake-o" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Área onde ficarão os alimentos armazenados */}
            <View style={styles.mainContent}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }} 
                    style={styles.mainImage}
                />
                <Text style={styles.mainText}>Esperando comida para ser armazenada</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => navigation.push('Alimentos')}>
                    <Icon name="plus-circle" size={24} color="#f65e1e" />
                    <Text style={styles.addButtonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            {/* Rodapé */}
            <Footer /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#f65e1e',
        height: 80,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
  
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    iconMargin: {
        marginLeft: 15,
    },
    navTabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#f65e1e',
        paddingVertical: 20,
        
    },
    navTab: {
        marginHorizontal: 30,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    mainImage: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    mainText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f65e1e',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    addButtonText: {
        color: '#f65e1e',
        marginLeft: 5,
        fontSize: 16,
    },
});

export default FridgeScreen;
