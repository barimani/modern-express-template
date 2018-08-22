import sequelize from './config/sequelize';
import User from './User.model';
import Project from './Project.model';

import setupRelations from './config/relationships';

setupRelations();

// This will create the tables (if don't exist)
sequelize.sync();

export {User, Project};