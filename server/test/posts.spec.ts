import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import Post from '../models/post';

const should = chai.use(chaiHttp).should();

describe('Posts', () => {

  beforeEach(done => {
    Post.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for posts', () => {

    it('should get all the posts', done => {
      chai.request(app)
        .get('/api/posts')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get posts count', done => {
      chai.request(app)
        .get('/api/posts/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new post', done => {
      const post = new Post({ title: 'This is a new Post!', body: 'This post a test body.'});
      chai.request(app)
        .post('/api/post')
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('title');
          res.body.should.have.a.property('body');
          done();
        });
    });

    it('should get a post by its id', done => {
      const post = new Post({ title: 'This is a new Post!', body: 'This post a test body.'});
      post.save((error, newPost) => {
        chai.request(app)
          .get(`/api/post/${newPost.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('body');
            res.body.should.have.property('_id').eql(newPost.id);
            done();
          });
      });
    });

    it('should update a post by its id', done => {
      const post = new Post({  title: 'Post For Test', body: 'Hi World!'});
      post.save((error, newPost) => {
        chai.request(app)
          .put(`/api/post/${newPost.id}`)
          .send({ weight: 5 })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a post by its id', done => {
      const post = new Post({title: 'Post For Test', body: 'Hi World!'});
      post.save((error, newPost) => {
        chai.request(app)
          .delete(`/api/post/${newPost.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});


