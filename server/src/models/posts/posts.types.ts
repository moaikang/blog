import { Document, Model } from 'mongoose';
import { IComment } from '../comments/comments.types';

export interface IPost {
  title: String;
  body: String;
  author: {
    _id: number;
    authorName: string;
    profileImg: string;
  };
  category: string;
  hashTags: string[];
  comments: IComment[];
  createdAt: string;
  updatedAt: string;
}

export interface IPostDocument extends IPost, Document {}
export interface IPostModel extends Model<IPostDocument> {}
