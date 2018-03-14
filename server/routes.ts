import * as express from 'express';

import PostController from './controllers/post';
import UserController from './controllers/user';
import Post from './models/post';
import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const postCtrl = new PostController();
  const userCtrl = new UserController();

  // Posts
  router.route('/posts').get(postCtrl.getAll);
  router.route('/posts/count').get(postCtrl.count);
  router.route('/post').post(postCtrl.insert);
  router.route('/post/:id').get(postCtrl.get);
  router.route('/post/:id').put(postCtrl.update);
  router.route('/post/:id').delete(postCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
