import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { colors } from './../styles/styles';

const SpinningTS = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 4000, // Adjust the duration as needed
          useNativeDriver: true,
        })
      ).start();
    }, [spinValue]);
  
    const spin = spinValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['0deg', '360deg', "0deg"], // Rotate 180 degrees around the Y-axis
    });
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { transform: [{ rotateY: spin }] }]}>
          <Text style={{ fontSize: 20, color: colors.color1 }}>T</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>I</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>S</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>M</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>S</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>T</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>U</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>D</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>I</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>O</Text>
          <Text style={{ fontSize: 20, color: colors.color1  }}>S</Text>
        </Animated.View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    box: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "row",
      marginBottom: -15,
    },
  });
  
  export default SpinningTS;