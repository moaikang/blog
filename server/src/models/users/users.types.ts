import { Document, Model } from 'mongoose';

export interface IUser {
  name: String;
  isAdmin: Boolean;
  socialType: String;
  createdAt: Date;
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}
