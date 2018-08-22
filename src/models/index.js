import sequelize from './config/sequelize';
import User from './User.model';
import Project from './Project.model';
import chalk from 'chalk';
import setupRelations from './config/relationships';

setupRelations();

// This will create the tables (if don't exist)
sequelize.sync().then(data => {
    const {database, host, port} = data.config;
    console.log(chalk.green.bgBlack.bold(`Successfully connected to database ${database} at ${host}:${port}`));
});

export {User, Project};