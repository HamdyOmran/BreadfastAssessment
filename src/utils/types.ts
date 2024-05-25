export interface PostItemType {
  id: string;
  user_id: string;
  title: string;
  body: string;
}

export interface CommentItemType {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}
