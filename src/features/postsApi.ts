import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {CommentItemType, PostItemType} from '../utils';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://gorest.co.in/public/v2/'}),
  endpoints: builder => ({
    getPosts: builder.query<PostItemType[], void>({
      query: () => `posts`,
    }),
    getPostComments: builder.query<CommentItemType[], string>({
      query: id => `posts/${id}/comments`,
    }),
  }),
});
export const {useGetPostsQuery, useGetPostCommentsQuery} = postsApi;
