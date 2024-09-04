import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Inicio from '../pages/inicio/index';
import Assistente from '../pages/assistente_voz/index';
import Carrinho from '../pages/carrinho/index';
import Favoritos from '../pages/favoritos/index';
import Perfil from '../pages/perfil/index';
import ButtonNew from '../components/ButtonNew'

import {Entypo, Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator(); 

export default function Routes() {
    return (

        
        <Tab.Navigator screenOptions={{
             tabBarStyle:{
                backgroundColor:'#7050C1',
            }, 

           tabBarActiveTintColor:'#fff',
          tabBarItemStyle: {
            paddingBottom: 5,
            paddingTop: 5
          }
        }}>
           
            <Tab.Screen 
            name="Início" 
            component={Inicio}
             options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <Entypo name="home" size={size} color={color}></Entypo>
                )
             }}
              />

            <Tab.Screen 
            name="Carrinho" 
            component={Carrinho} 
            options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <Entypo name="shopping-cart" size={size} color={color}></Entypo>
                )
             }}
             />

            <Tab.Screen 
            name="Assistente de Voz" 
            component={Assistente} 
            options={{
                headerShown: false,
                tabBarLabel:'',
                tabBarIcon: ({size, color}) => (
                    <ButtonNew size={size} color={color}/>
                )
             }}
             />

            <Tab.Screen 
            name="Favoritos" 
            component={Favoritos} 
            options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => ( 
                    <Entypo name="heart" size={size} color={color}></Entypo>
                )
             }}
              />
    
            <Tab.Screen 
            name="Perfil" 
            component={Perfil}
            options={{
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                    <Entypo name="user" size={size} color={color}></Entypo>
                )
             }}
              />

        </Tab.Navigator>
    )
}