import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue, clamp, StretchInX } from 'react-native-reanimated';
import { ButtonToggler, Menu, StudentCard } from '../components';
import { gstyle, height, SPrincipal as tstyle, width } from '../styles';
import { moviment, top } from '../constants/metrics';

const Principal = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const translateX = useSharedValue(0);
  const isToggling = useSharedValue(false);

  const handleToggle = (direction) => {
    isToggling.value = true;

    const xOffset = direction === 'left' ? 0 : width;

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: xOffset, animated: true });
    }

    setTimeout(() => {
      isToggling.value = false;
    }, 300);
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    if (!isToggling.value) {
      translateX.value = clamp(event.contentOffset.x / 4.2, 0, moviment);
    }
  });


  // ! TENTAR FAZER O BOTÃO ACOMPANHAR O SCROLLVIEW
  // const handlePanGesture = (e) => {
  //   if (scrollViewRef.current) {
  //     console.log(translateX.value);
  //     scrollViewRef.current.scrollTo({ x: translateX.value * 5.2, animated: false });
  //   }
  // };

  return (
    <View style={tstyle.container}>
      <ButtonToggler
        onToggle={handleToggle}
        translateX={translateX}
      // TODO: onPanGesture={handlePanGesture}
      />
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        style={tstyle.scrollView}
        onScroll={scrollHandler}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        <View style={tstyle.page}>
          <Text style={tstyle.text}>QRCode</Text>
        </View>
        <View style={tstyle.page}>
          <StudentCard/>
        </View>
      </Animated.ScrollView>
      <Pressable onPress={() => navigation.navigate("Schedule")} style={tstyle.scheduelePress}>
        <Text style={[gstyle.bold, tstyle.schedueleText]}>Horários</Text>
      </Pressable>

      <Menu  navigation={navigation}/>
    </View>
  );
};

export default Principal;