import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import stylePerfil from '../../styles/perfil.js';
import { FontAwesome } from '@expo/vector-icons';

export default function Perfil() {
  return (
    <ScrollView style={stylePerfil.container}>
    <View style={stylePerfil.headerContainer}>
        <View style={stylePerfil.headerU}>
          <View style={stylePerfil.iconContainer}>
            <FontAwesome name="user-circle" size={100} color="#fff" />
          </View>
          <Text style={stylePerfil.profileName}>Nome do Usuário</Text>
        </View>
      </View>

      {/* Opções */}
      <View style={stylePerfil.optionsContainer}>
        <TouchableOpacity style={stylePerfil.optionButton}>
          <Text style={stylePerfil.optionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylePerfil.optionButton}>
          <Text style={stylePerfil.optionText}>Acessibilidade</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylePerfil.optionButton}>
          <Text style={stylePerfil.optionText}>Modo Escuro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylePerfil.optionButton}>
          <Text style={stylePerfil.optionText}>Quem Somos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylePerfil.optionButton}>
          <Text style={stylePerfil.optionText}>Configurações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylePerfil.optionButton}>
          <Text style={stylePerfil.optionText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

