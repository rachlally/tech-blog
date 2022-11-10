const router = require('express').Router();
const {User, Post, Comment} = require('../models/');
const withAuth= require('../utils/auth');

router.get("/", withAuth, async (req,res)=>{
    try{
        const postData = await Post.findAll({
            where:{'user_id':req.session.user_id},
            include: User
        });
        const posts = postData.map((post)=>post.get({plain:true}))
        res.render("allposts",{posts})
    } catch (err){
        res.status(500).json(err)
    }
})
