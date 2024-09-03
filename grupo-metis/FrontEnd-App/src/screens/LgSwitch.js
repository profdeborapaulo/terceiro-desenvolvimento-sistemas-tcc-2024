import React from 'react';
import { View, StatusBar, SafeAreaView, Pressable, Image, Text } from 'react-native';
import { TopSpot, BottomSpot, Girl } from '../../assets/svgs';
import { SLgSwitch as tstyle, gstyle, width } from '../styles/';


const SwitchLogin = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor='transparent' />

      <TopSpot height='200' width='300' viewBox='0 0 300 200' style={tstyle.topSpot} />
      <BottomSpot width='300' height='400' viewBox='0 0 400 100' style={tstyle.bottomSpot} />
      <Girl width='100' height='200' viewBox='0 0 100 200' style={tstyle.girlSvg} />

      <View style={tstyle.container}>
        <Text style={[gstyle.bold, tstyle.title]}>
          Você é aluno{'\n'}ou{'\n'}responsável?
        </Text>

        <View style={tstyle.containerButtons}>
          <Pressable
            style={[tstyle.button, { marginBottom: width * 0.1 }]}
            onPress={() =>
              navigation.navigate('Login', {
                selectedUser: 'student',
              })
            }
          >
            <Text style={[gstyle.bold, tstyle.textButton]}>Aluno</Text>
          </Pressable>
          <Pressable
            style={tstyle.button}
            onPress={() =>
              navigation.navigate('Login', {
                selectedUser: 'responsible',
              })
            }
          >
            <Text style={[gstyle.bold, tstyle.textButton]}>Responsável</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SwitchLogin;