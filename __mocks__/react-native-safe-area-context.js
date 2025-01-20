// __mocks__/react-native-safe-area-context.js
import React from 'react';
import { View } from 'react-native';

const inset = {
  top: 62,
  right: 0,
  bottom: 32,
  left: 0,
};

export const SafeAreaProvider = ({ children }) => children;

export const SafeAreaConsumer = ({ children }) => children(inset);

export const SafeAreaView = ({ children }) => (
  <View style={inset}>{children}</View>
);

export const useSafeAreaInsets = () => inset;
