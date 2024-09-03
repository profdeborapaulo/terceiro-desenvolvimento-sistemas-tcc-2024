import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { gstyle, colors, width } from '../styles';
import SvgImage from './SvgImage';

const PrincipalMenu = ({navigation}) => {
  return (
    <View style={styles.menu}>
        <Pressable  onPress={()=>navigation.navigate("Frequency")} style={styles.menuItem}>
          <SvgImage width="28" color="white" height="28" svgName='clock' />
          <Text style={[gstyle.regular, styles.menuText]}>Frequência</Text>
        </Pressable>
        <Pressable style={styles.menuItem}>
          <SvgImage width="28" color="white" height="28" svgName='bell' />
          <Text style={[gstyle.regular, styles.menuText]}>Notificações</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    width: width * 0.9,
    backgroundColor: colors.pcian,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: width * 0.02
  },
  menuText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default PrincipalMenu;