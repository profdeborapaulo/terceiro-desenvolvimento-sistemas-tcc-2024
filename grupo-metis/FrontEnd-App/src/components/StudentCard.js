import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { gstyle, colors, width } from '../styles';
import { LinearGradient } from 'expo-linear-gradient';

const StudentCard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={[colors.pcian, colors.pcianalt]}
      >
        <View style={styles.top}>
          <Image resizeMode='contain' style={styles.studentPhoto} source={require('../../assets/img/example.png')} />
          <View style={styles.sideInfo}>
            <Text style={[gstyle.bold, styles.small]}>NOME</Text>
            <Text style={[gstyle.regular, styles.normal, { marginBottom: width * 0.02 }]}>PEDRO LUCAS ALMEIDA CUNHA</Text>
            <Text style={[gstyle.bold, styles.small]}>DATA DE NASCIMENTO</Text>
            <Text style={[gstyle.regular, styles.normal]}>DD/MM/AAAA</Text>
          </View>
        </View>

        <View style={styles.main}>
          <View>
            <Text style={[gstyle.bold, styles.small]}>INSTITUIÇÃO</Text>
            <Text style={[gstyle.regular, styles.normal]}>ETEC ERMELINDA GIANINNI TEIXEIRA</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[gstyle.bold, styles.small, {marginRight: width * 0.02}]}>TURMA:</Text>
            <Text style={[gstyle.regular, styles.normal]}>3º A</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[gstyle.bold, styles.small, {marginRight: width * 0.02}]}>RA:</Text>
            <Text style={[gstyle.regular, styles.normal]}>XXXXXXXXX-X</Text>
          </View>
          <View>
            <Text style={[gstyle.bold, styles.small]}>DOCUMENTOS</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[gstyle.bold, styles.small, {marginRight: width * 0.02}]}>CPF:</Text>
              <Text style={[gstyle.regular, styles.normal]}>XXX.XXX.XXX-XX</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[gstyle.bold, styles.small, {marginRight: width * 0.02}]}>RG:</Text>
              <Text style={[gstyle.regular, styles.normal]}>XXX.XXX.XXX-X</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
              <Text style={[gstyle.bold, styles.small, {marginRight: width * 0.02}]}>Vencimento:</Text>
              <Text style={[gstyle.regular, styles.normal]}>DD/MM/AAAA</Text>
            </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  gradient: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.04
  },
  studentPhoto: { width: 125, height: 150, borderRadius: 20 },
  top: {
    flex: 0,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: width * 0.04
  },
  main: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'left',
    justifyContent: 'space-between',
    padding: width * 0.05,
    borderRadius: 20,
    borderColor: '#ffffff39',
    backgroundColor: 'rgba(255, 255, 255, 0.144)',
    borderWidth: 1,
  },
  sideInfo: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: width * 0.04
  },
  normal: {
    color: 'white',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
    textAlignVertical: 'top',
  },
  small: {
    color: 'white',
    fontSize: 14,
    marginBottom: width * 0.001,
    textAlignVertical: 'top',
    textTransform: 'uppercase'
  }
});

export default StudentCard;