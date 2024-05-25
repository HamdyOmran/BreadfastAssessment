import React, {useEffect, useState} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }, 3000);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const {container, imageStyle} = styles;

  return (
    <View style={container}>
      <Animated.Image
        source={require('../../assets/coffee-cup.png')}
        style={[imageStyle, {opacity}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 220,
    height: 220,
    tintColor: colors.white,
  },
});

export {SplashScreen};
