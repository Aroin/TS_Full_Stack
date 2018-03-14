import * as mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  body: Number,
  user: Number,
  modefiedTime: String
});

const Post = mongoose.model('Cat', postSchema);

export default Post;
