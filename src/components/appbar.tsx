import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import {colors} from '../utils';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Appbar = ({title, back}: {title?: string; back?: boolean}) => {
  const navigation = useNavigation();

  const {container, titleStyle} = styles;

  return (
    <SafeAreaView style={container}>
      {Platform.OS === 'android' && (
        <View style={{marginTop: StatusBar.currentHeight}} />
      )}
      {back && (
        <Ionicons
          name="arrow-back"
          color={colors.white}
          size={24}
          style={{marginLeft: 16, marginTop: 12}}
          onPress={() => navigation.goBack()}
        />
      )}

      {title && <Text style={titleStyle}>{title}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: colors.primary,
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    position: 'absolute',
    top: 100,
    left: 72,
    fontFamily: 'Lato-Regular',
  },
});

export {Appbar};
