const fs = require('fs');
import { v4 as uuid } from 'uuid';

let { posts } = require('../../pages/api/posts/data.json');

export const postsRepo = {
  find: (x) => posts.find(x),
  createPost,
  updatePost,
  deletePost,
};

function createPost(post) {
  post.id = uuid();
  post.createdAt = Date.now();
  posts.push(post);
  saveData();
}

function updatePost(id, params) {
  const post = posts.find((x) => x.id === id);
  post.createdAt = Date.now();
  Object.assign(post, params);
  saveData();
}

function deletePost(id) {
  posts = posts.filter((x) => x.id !== id);
  saveData();
}

function saveData() {
  fs.writeFileSync(
    './pages/api/posts/data.json',
    JSON.stringify({ posts: posts }, null, 4)
  );
}
