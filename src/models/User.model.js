import Sequelize from 'sequelize';
import db from './config/sequelize';

const User = db.define('user', {
    email: Sequelize.STRING,
    birthday: Sequelize.DATE,
    password: Sequelize.STRING,
});

export default User;