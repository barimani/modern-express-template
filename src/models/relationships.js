import User from './User.model'
import Project from './Project.model'

export default () => {
    User.belongsToMany(Project, {through: 'UserProject'});
    Project.belongsToMany(User, {through: 'UserProject'});
};