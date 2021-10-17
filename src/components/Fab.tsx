import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  CountPixelPosition?: number;
  positionLeftOrRight?: PositionOptions;
  onPress: () => void;
}

type PositionOptions = 'left' | 'right';

export const Fab = ({
  title,
  positionLeftOrRight = 'left',
  CountPixelPosition = 10,
  onPress,
}: Props) => {
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocationBottom,
          positionLeftOrRight === 'left'
            ? {left: CountPixelPosition}
            : {right: CountPixelPosition},
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        style=
        {[
          styles.fabLocationBottom,
          positionLeftOrRight === 'left'
            ? {left: CountPixelPosition}
            : {right: CountPixelPosition},
        ]}
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocationBottom: {
    position: 'absolute',
    bottom: 15,
  },
  fab: {
    backgroundColor: '#5856dc',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
});
