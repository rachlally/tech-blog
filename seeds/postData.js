const posts = [
    {
        'post_title': 'Heroku',
        'post_body': 'Deploy for free but only for a limited time',
        'user_id': 1
    },
    {
        'post_title': 'Handlebars',
        'post_body': 'A great starter to eventually working with React',
        'user_id': 2
    },
    {
        'post_title': 'Sequelize',
        'post_body': 'Databases are so fun',
        'user_id': 3
    }
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;