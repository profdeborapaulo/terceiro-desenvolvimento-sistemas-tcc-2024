import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LgSwitch, Principal, Splash, Login, Schedule, Frequency, ChangePassword } from './src/screens';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // !
  // if (!fontsLoaded) {
  //   return(
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color={colors.pcian} />
  //     </View>
  //   );
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Switch" component={LgSwitch} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Frequency" component={Frequency} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};