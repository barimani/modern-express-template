import Sequelize from 'sequelize';
import {sequelize} from '../config';

const Project = sequelize.define('project', {
    title: Sequelize.STRING,
});

export default Project;