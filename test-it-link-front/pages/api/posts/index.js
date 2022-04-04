const { posts } = require('./data.json');

import { postsRepo } from '@/helpers/api/postsRepo';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    let result;
    if (req.query.term) {
      const term = req.query.term;
      const options = {
        ignoreLocation: true,
        minMatchCharLength: term.length,
        keys: ['name', 'description', 'content'],
      };
      const Fuse = (await import('fuse.js')).default;
      const fuse = new Fuse(posts, options);
      result = fuse
        .search(`="${term}"`)
        .map((resItem) => resItem.item)
        .sort((a, b) => b.createdAt - a.createdAt);
    } else {
      result = posts.sort((a, b) => b.createdAt - a.createdAt);
    }
    res.status(200).json(result);
  } else if (req.method === 'POST') {
    postsRepo.createPost(req.body);
    const post = posts.filter((item) => item.id === req.body.id);
    res.status(201).json(post);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res
      .status(405)
      .json({ message: `Невозможно выполнить метод ${req.method}` });
  }
}
