// @ts-ignore
import sequelize from './config/sequelize.js';

// @ts-ignore
import UserRepository from './User.repository.ts';

// @ts-ignore
import Project from './Project.model';

// @ts-ignore
import setupRelations from './config/relationships';

setupRelations();

// This will create the tables (if don't exist)
sequelize.sync();

export {UserRepository, Project};