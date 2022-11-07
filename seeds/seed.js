const sequelize = require('../config/connection');
const { User, Post } = require('../models');


const seed = async () => {
  await sequelize.sync({ force: true });
    const users = await User.bulkCreate([
        {
            username: "Batman",
            password: "password"
        },
        {
            username: "Spiderman",
            password: "password1"
        },
        {
            username: "Wonder Woman",
            password: "password2"
        }
    ],{
        individualHooks:true
    })
    const posts = await Post.bulkCreate([
        {
            title: "Heroku",
            content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            // date
            user_id: 1
        },
        {
            title: "Sequelize",
            content: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            // data:
            user_id: 2
        },
        {
            title: "Mysql",
            content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            // data:
            user_id: 3
        },
        {
            title: "Dotenv",
            content:"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            // data:
            user_id: 1
        }
    ])

    console.log('seeded!')
    process.exit(0);
}

seed();