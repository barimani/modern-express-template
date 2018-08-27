// @ts-ignore
import Sequelize from 'sequelize';
// @ts-ignore
import db from './config/sequelize';

import {BasicRepository} from '../helpers/repository';

export interface User {
    username: string;
    birthday: Date;
    getProjects?(): Promise<any[]>;
    addProject?(project: any): Promise<void>;

}


interface UserRepository extends BasicRepository<User> {
}


// Implementation
const Repo : UserRepository = db.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

export default Repo;