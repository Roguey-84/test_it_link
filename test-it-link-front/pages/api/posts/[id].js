const { posts } = require('./data.json');

import { postsRepo } from '@/helpers/api/postsRepo';

export default function handler(req, res) {
  const post = posts.filter((post) => post.id === req.query.id);

  if (req.method === 'GET') {
    res.status(200).json(post);
  } else if (req.method === 'DELETE') {
    try {
      postsRepo.deletePost(req.query.id);
      res.status(200).json({});
    } catch (err) {
      res.status(400).json({ message: err });
    }
  } else if (req.method === 'PUT') {
    postsRepo.updatePost(req.query.id, req.body);
    const post = posts.filter((post) => post.id === req.query.id);
    res.status(200).json(post);
  } else {
    res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
    res
      .status(405)
      .json({ message: `Невозможно выполнить метод ${req.method}` });
  }
}
