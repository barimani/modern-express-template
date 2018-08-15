const Sequelize = require('sequelize');
const sequelize = require('./config');

const User = require('./User.model');

const Project = sequelize.define('project', {
    name: Sequelize.STRING,
});

module.exports = Project;