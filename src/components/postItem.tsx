import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PostItemType, colors} from '../utils';
import FastImage from 'react-native-fast-image';

interface Props extends PostItemType {
  onPress?: () => void;
}

const PostItem = React.memo(({user_id, title, body, onPress}: Props) => {
  const {
    container,
    avatarContainerStyle,
    nameStyle,
    avatarStyle,
    cardDetails,
    titleStyle,
    bodyStyle,
  } = styles;

  return (
    <TouchableOpacity style={container} disabled={!onPress} onPress={onPress}>
      <View style={avatarContainerStyle}>
        <FastImage
          source={require('../../assets/man.png')}
          style={avatarStyle}
        />
        <Text style={nameStyle}>{user_id}</Text>
      </View>
      <View style={cardDetails}>
        <Text style={titleStyle}>{title}</Text>
        {body && <Text style={bodyStyle}>{body}</Text>}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  avatarContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarStyle: {
    width: 48,
    height: 48,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  cardDetails: {
    marginLeft: 8,
    marginTop: 16,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bodyStyle: {
    fontSize: 12,
    color: colors.darkGray,
    lineHeight: 16,
    marginTop: 8,
  },
});

export {PostItem};
