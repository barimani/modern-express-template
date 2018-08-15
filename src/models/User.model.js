import Sequelize from 'sequelize';
import {sequelize} from '../config';

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

export default User;