import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CommentItemType, colors} from '../utils';

interface Props {
  item: CommentItemType;
}

const CommentItem = React.memo(({item}: Props) => {
  const {name, body} = item;

  const {container, nameStyle, avatarStyle, cardDetails, titleStyle} = styles;

  return (
    <View style={container}>
      <FastImage source={require('../../assets/boy.png')} style={avatarStyle} />
      <View style={cardDetails}>
        <Text style={nameStyle}>{name}</Text>
        {body && <Text style={titleStyle}>{body}</Text>}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: 380,
    flexDirection: 'row',
    padding: 16,
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.gray,
    alignSelf: 'center',
  },
  avatarStyle: {
    width: 48,
    height: 48,
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDetails: {
    marginLeft: 8,
  },
  titleStyle: {
    fontSize: 12,
    color: colors.darkGray,
    lineHeight: 16,
    marginTop: 8,
  },
});

export {CommentItem};
