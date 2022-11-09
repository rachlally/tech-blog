const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const bcrypt = require("bcrypt")

router.get('/',(req,res)=>{
    User.findAll({
        // include:[Post]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred",err})
    })
})

router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(foundUser=>{
        //wrong username
        if(!foundUser){
            return res.status(401).json({msg:"Invalid login credentials"})
        } 
        //wrong password
        if(!bcrypt.compareSync(req.body.password,foundUser.password)){
            return res.status(401).json({msg:"Invalid login credentials"})
        }
        //correct login
        req.session.save = {
            username:foundUser.name,
            id:foundUser.id
        }
        res.json(foundUser);
    })
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;