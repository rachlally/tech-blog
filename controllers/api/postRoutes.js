const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
      include: [
        
        {
          model: User,
          
        }
      ]
    })
      .then((post) => res.json(post))
      .catch((err) => res.status(500).json(err))
  });

  module.export = router;