import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScrren = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 1.0)',
        }}>
        Hola mundo!!
      </Text>
    </View>
  );
};
