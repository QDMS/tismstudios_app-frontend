import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';


const RotatingStarLoader = () => {
  return (
    <View style={styles.container}>
        <Animatable.View
          animation="rotate"
          easing="linear"
          iterationCount="infinite"
          duration={2000}
        >
          <Svg height="100" width="100">
            <Defs>
              <LinearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <Stop offset="0%" stopColor="red" />
                <Stop offset="100%" stopColor="black" />
              </LinearGradient>
            </Defs>
            <Path
              d="M50,5 61.18,39.51 97.36,39.51 67.64,63.19 78.82,97.69 50,74 21.18,97.69 32.36,63.19 2.64,39.51 38.82,39.51Z"
              fill="url(#starGradient)"
              stroke="black"
              strokeWidth="2"
            />
          </Svg>
        </Animatable.View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set your background color here
  },
});


export default RotatingStarLoader;
