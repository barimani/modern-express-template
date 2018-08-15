const Sequelize = require('sequelize');
const sequelize = require('./config');

const Project = require('./Project.model');

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

User.belongsToMany(Project, {through: 'UserProject'});
Project.belongsToMany(User, {through: 'UserProject'});


module.exports = User;