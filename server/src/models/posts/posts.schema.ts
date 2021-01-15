import mongoose, { Schema } from 'mongoose';
import CommentSchema from '../comments/comments.schema';

const PostSchema = new Schema({
  title: String,
  body: String,
  author: {
    _id: mongoose.Types.ObjectId,
    authorName: String,
    profileImg: String,
  },
  category: String,
  hashTags: [String],
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default PostSchema;
