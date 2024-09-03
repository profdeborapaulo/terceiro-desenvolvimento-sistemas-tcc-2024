import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //Bíblioteca de ícones
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Footer from './components/Footer';

const ConfigScreen = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Configurações</Text>
                <View style={styles.headerIcons}>
                    <Icon name="search" size={20} color="#fff" />
                    <Icon name="ellipsis-v" size={20} color="#fff" style={styles.iconMargin} />
                </View>
            </View>

            {/* Área do perfil */}
            <View style={styles.profileContainer}>
                <Image 
                    source={{ uri: 'https://via.placeholder.com/150' }} 
                    style={styles.profileImage} 
                />
                <Text style={styles.profileName}>Nome do Fulano</Text>
            </View>

            {/* Divisão */}
            <View style={styles.divider} />

            {/* Opções de configuração */}
            <ScrollView>
                <View style={styles.option}>
                    <Icon name="user" size={24} color="#aaa" />
                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>Conta</Text>
                        <Text style={styles.optionSubtitle}>Mudança de conta</Text>
                    </View>
                </View>

                <View style={styles.option}>
                    <Icon name="bell" size={24} color="#aaa" />
                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>Notificações</Text>
                        <Text style={styles.optionSubtitle}>Edições</Text>
                    </View>
                </View>

                <View style={styles.option}>
                    <Icon name="globe" size={24} color="#aaa" />
                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>Idioma</Text>
                        <Text style={styles.optionSubtitle}>Português (Brasil) (idioma do dispositivo)</Text>
                    </View>
                </View>

                <View style={styles.option}>
                    <Icon name="refresh" size={24} color="#aaa" />
                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>Armazenamento e dados</Text>
                        <Text style={styles.optionSubtitle}>Uso de Rede, download automático</Text>
                    </View>
                </View>

                <View style={styles.option}>
                    <Icon name="question-circle" size={24} color="#aaa" />
                    <View style={styles.optionText}>
                        <Text style={styles.optionTitle}>Ajuda</Text>
                        <Text style={styles.optionSubtitle}>Central de ajuda, fale conosco, Política de Privacidade</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Rodapé */}
            <Footer/>
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
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    iconMargin: {
        marginLeft: 15,
    },
    profileContainer: {
        alignItems: 'center',
        padding: 20,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#eee',
    },
    profileName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    optionText: {
        marginLeft: 15,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    optionSubtitle: {
        color: '#888',
        fontSize: 14,
    },

});

export default ConfigScreen;
