import {app} from "../config";
import {CRUD} from "../helpers/CRUD";
import {Project, User} from "../models";

export const setupControllers = () => {
    CRUD(app, Project, '/projects');
    CRUD(app, User, '/users');
};