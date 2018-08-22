import Sequelize from 'sequelize';
import db from './config/sequelize';

const User = db.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

export default User;