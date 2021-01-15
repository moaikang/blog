import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
    profileImg: String,
  },
  subComments: [
    {
      content: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      user: {
        _id: mongoose.Types.ObjectId,
        username: String,
      },
    },
  ],
});

export default CommentSchema;
