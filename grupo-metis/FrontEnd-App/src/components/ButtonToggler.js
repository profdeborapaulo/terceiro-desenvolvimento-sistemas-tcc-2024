import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, runOnJS, clamp } from 'react-native-reanimated';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import { containerWidth, containerHeight, animatedWidth, animatedHeight, top, moviment } from '../constants/metrics';
import { gstyle, colors } from '../styles';

const ButtonToggler = ({ translateX, onToggle }) => {
  const [selectedButton, setSelectedButton] = useState('left');

  const moveButton = (direction) => {
    setSelectedButton(direction);

    if (direction === 'left') {
      translateX.value = 0;
    } else {
      translateX.value = moviment;
    }

    onToggle(direction);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{
      translateX: withTiming(translateX.value * 2, {
        duration: 100,
        easing: Easing.in(Easing.elastic(0.5)),
      })
    }],
  }));

  const tap = Gesture.Tap()
    .maxDuration(250)
    .onEnd((e) => {
      const direction = e.x > (containerWidth / 2) ? 'right' : 'left';
      runOnJS(moveButton)(direction);
    });

  const pan = Gesture.Pan()
    .onChange((e) => {
      if (selectedButton === 'left') {
        translateX.value = clamp(e.translationX, 0, moviment);
      } else {
        translateX.value = clamp(e.translationX + moviment, 0, moviment);
      }
    })
    .onEnd((e) => {
      const direction = e.translationX > moviment / 2 ? 'right' : 'left';
      runOnJS(moveButton)(direction);
    });

  const compose = Gesture.Race(tap, pan);

  return (
    <GestureHandlerRootView style={{ flex: 0, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }}>
      <GestureDetector gesture={compose}>
        <View style={tstyle.container}>
          <Animated.View style={[tstyle.animatedView, animatedStyles]} />
          <Text style={[gstyle.bold, tstyle.text]}>QRCode</Text>
          <Text style={[gstyle.bold, tstyle.text]}>Carteirinha</Text>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const tstyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: containerWidth,
    height: containerHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: colors.gray
  },
  animatedView: {
    position: 'absolute',
    top: top,
    left: top,
    width: animatedWidth,
    height: animatedHeight,
    borderRadius: 15,
    backgroundColor: colors.pcian,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: 'white'
  }
});

export default ButtonToggler;