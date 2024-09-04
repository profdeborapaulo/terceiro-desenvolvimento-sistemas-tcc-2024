import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styleAssistente from '../../styles/assistente';
import styles from '../../styles/styles';

export default function Carrinho() {
    return (
        <View style={styles.container}>
       
        <Text>Você ainda não possui nenhum produto no carrinho.</Text>
      </View>
    );
}