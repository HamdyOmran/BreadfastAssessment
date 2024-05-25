import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils';

import {useNavigation} from '@react-navigation/native';

const Window = ({
  title,
  back,
  children,
}: {
  title?: string;
  back?: boolean;
  children: React.JSX.Element;
}) => {
  const navigation = useNavigation();

  const {container, titleStyle, titleContainerStyle, backIconStyle} = styles;

  return (
    <>
      <SafeAreaView style={container}>
        {Platform.OS === 'android' && (
          <View style={{marginTop: StatusBar.currentHeight}} />
        )}
        <View style={titleContainerStyle}>
          {back && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/arrow.png')}
                style={backIconStyle}
              />
            </TouchableOpacity>
          )}

          {title && <Text style={titleStyle}>{title}</Text>}
        </View>
      </SafeAreaView>
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.primary,
  },
  titleStyle: {
    color: 'white',
    fontSize: 20,
  },
  titleContainerStyle: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  backIconStyle: {
    width: 24,
    height: 24,
    tintColor: colors.white,
    marginRight: 32,
  },
});

export {Window};
