import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {PostItemType, colors} from '../utils';
import {PostItem, PostItemLoading, Window} from '../components';
import {useGetPostsQuery} from '../features/postsApi';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {data, isLoading, isFetching, refetch} = useGetPostsQuery();

  const onRefresh = () => refetch();

  const onPostCardPress = (item: PostItemType) =>
    navigation?.navigate('PostDetails', {item});

  const renderItem = ({item}: {item: PostItemType}) => {
    if (isLoading) return <PostItemLoading />;
    return <PostItem {...item} onPress={() => onPostCardPress(item)} />;
  };

  const ItemSeparatorComponent = () => {
    if (!isLoading) return <View style={styles.separatorStyle} />;
  };

  const ListFooterComponent = () => {
    if (!isLoading) return <View style={styles.footerViewStyle} />;
  };

  const {container} = styles;

  return (
    <Window title={'Home'}>
      <View style={container}>
        <FlashList
          data={isLoading ? ['', '', '', '', '', ''] : data}
          renderItem={renderItem}
          estimatedItemSize={50}
          showsVerticalScrollIndicator={false}
          onRefresh={onRefresh}
          refreshing={isFetching}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListFooterComponent={ListFooterComponent}
        />
      </View>
    </Window>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  separatorStyle: {
    backgroundColor: colors.gray,
    height: 1,
  },
  footerViewStyle: {
    marginBottom: 100,
  },
});

export {HomeScreen};
