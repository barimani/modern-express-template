import User from './User.model';
import Project from './Project.model';

import setupRelations from './relationships';

setupRelations();

export {User, Project};