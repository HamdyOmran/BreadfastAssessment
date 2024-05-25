import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {CommentItemType, PostItemType, colors} from '../utils';
import {CommentItem, PostItem, PostItemLoading, Window} from '../components';
import {useGetPostCommentsQuery} from '../features/postsApi';

interface Props {
  route: {
    params: {
      item: PostItemType;
    };
  };
}

const PostDetailsScreen = ({route}: Props) => {
  const {item} = route?.params;

  const {data, isLoading, isFetching, refetch} = useGetPostCommentsQuery(
    item?.id,
  );

  const onRefresh = () => refetch();

  const renderItem = ({item}: {item: CommentItemType}) => {
    if (item) return <CommentItem item={item} />;
    return <PostItemLoading />;
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <PostItem {...item} />
        <View style={styles.separatorStyle} />
      </>
    );
  };

  const ListFooterComponent = () => {
    if (data?.length === 0)
      return (
        <Text style={styles.noCommentsTitleStyle}>
          {'Be the first to leave a comment!'}
        </Text>
      );
  };

  const {container, commentsListContainer} = styles;

  return (
    <Window title={'Post Details'} back>
      <View style={container}>
        <View style={commentsListContainer}>
          <FlashList
            data={isLoading ? Array(10).fill(0) : data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={10}
            onRefresh={onRefresh}
            refreshing={isFetching}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
          />
        </View>
      </View>
    </Window>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  commentsListContainer: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  separatorStyle: {
    backgroundColor: colors.gray,
    height: 1,
  },
  noCommentsTitleStyle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 32,
  },
});

export {PostDetailsScreen};
