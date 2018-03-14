import Post from '../models/post';
import BaseController from './base';

export default class PostController extends BaseController {
  model = Post;
}
