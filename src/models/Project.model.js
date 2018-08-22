import Sequelize from 'sequelize';
import db from './config/sequelize';

const Project = db.define('project', {
    title: Sequelize.STRING,
});

export default Project;