import { Document, Model } from 'mongoose';

interface CommentType {
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    _id: number;
    username: string;
    profileImg: string;
  };
}

export interface IComment extends CommentType {
  subComments: CommentType[];
}

export interface ICommentDocument extends IComment, Document {}
export interface ICommentModel extends Model<ICommentDocument> {}
