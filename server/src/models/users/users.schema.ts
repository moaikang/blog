import { Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  isAdmin: Boolean,
  socialType: String,
  createdAt: Date,
});

export default UserSchema;
