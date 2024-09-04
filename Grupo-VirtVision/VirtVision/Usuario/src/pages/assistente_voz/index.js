import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styleAssistente from '../../styles/assistente';
import styles from '../../styles/styles';

export default function Assistente() {
    return (
        <View style={styles.container}>
        <Text>Assistente de Voz</Text>
        <Text>Esse recurso não está disponível no momento.</Text>
      </View>
    );
}