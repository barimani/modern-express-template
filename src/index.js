const Sequelize = require('sequelize');

console.log('CONFIGURING MYSQL CONNECTION: TEST');

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});


const User = sequelize.define('user', {name: Sequelize.STRING});
const Project = sequelize.define('project', {title: Sequelize.STRING});


User.belongsToMany(Project, { through: 'UserProjects' });
Project.belongsToMany(User, { through: 'UserProjects' });



sequelize.sync()
    .then(() => {
        User.findById(1).then (user => {
            Project.findById(1).then (project => {
                user.addProject(project).then (result => {
                    console.log(JSON.stringify(project))
                })
            })
        })
    });


