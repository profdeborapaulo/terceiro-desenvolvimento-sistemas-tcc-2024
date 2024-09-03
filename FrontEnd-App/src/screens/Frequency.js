import React,{useState} from 'react';
import { View, Text, StyleSheet, Touchable, Pressable } from 'react-native';
import { gstyle, width, colors } from '../styles';
import { Chart } from '../components';
import { BackButton } from '../../assets/svgs';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Frequency = ({navigation}) => {

  const chartData = [
    {
      value: 30,
      color:  '#EBAA2C',
      label: 'falta'
    },
    {
      value: 70,
      color: colors.icewhite,
      label: 'aula'
    }
  ]

  return (
    <View style={styles.container}>
      <View style={{flex: 0, alignSelf: 'stretch', justifyContent: 'center'}}>
        <Pressable style={[gstyle.goBackButton, {position: 'absolute', zIndex: 1000}]} onPress={() => navigation.goBack()}>
            <BackButton/>
        </Pressable>
        <Text style={[gstyle.bold, styles.title]}>Frequência</Text>
      </View>      
      <View style={styles.chartContainer}>
        <View style={{position: 'absolute', top: width* 0.1, right: width * 0.065}}>
          <Text style={[gstyle.bold, styles.chartValue]}>Faltas</Text>
          <Text style={[gstyle.regular, styles.chartValue]}>{chartData[0].value + '%'}</Text>
        </View>
        <View style={{position: 'absolute', bottom: width * 0.05, left: width * 0.05}}>
          <Text style={[gstyle.bold, styles.chartValue]}>Presença</Text>
          <Text style={[gstyle.regular, styles.chartValue]}>{chartData[1].value + '%'}</Text>
        </View>          
        <Chart data={chartData}/>
      </View>
      <View>
        <View style={{flex: 0, alignSelf: 'stretch', marginBottom: width * 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: width * 0.05}}>
          <Text style={[gstyle.bold, styles.info]} >Faltas atuais:</Text >
          {/* //> aqui vai o número de faltas */}
          <Text style={[gstyle.bold, styles.info]}>20</Text>
        </View>
        <View style={{flex: 0, alignSelf: 'stretch', marginBottom: width * 0.1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: width * 0.05}}>
          <Text style={[gstyle.bold, styles.info]} >Faltas permitidas:</Text >
          {/* //> aqui vai o número de faltas */}
          <Text style={[gstyle.bold, styles.info]}>20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'space-between', 
    alignContent: 'center',
    paddingVertical: width * 0.23,
    paddingHorizontal: width * 0.07
  },
  chartContainer:{
    flex: 0, 
    position: 'relative',
    height: width * 0.65, 
    justifyContent: 'center',
    alignSelf: 'stretch', 
    backgroundColor: colors.pcian,
    borderRadius: 40,
  },
  title: {
    fontSize: 40,
    color: colors.pcian,
    textAlign: 'center',
  },
  info:{
    fontSize: 22,
    color: colors.darkblue,
    textAlign: 'left',
    lineHeight: 40,
    letterSpacing: -0.5
  },
  chartValue: {
    textAlign: 'center',
    color: 'white',
    fontSize: 17
  }
});

export default Frequency;