import {User, Project} from "../models";

export const getUsers = async (req, res) => {
    const users = await User.findAll();

    res.send(users);
};

export const createUser = async (req, res) => {
    const {email, birthday, password} = req.body;
    const user = await User.create({email, birthday, password});

    res.send(user);
};

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.userId);

    res.send(user);
};

export const getUsersProjects = async (req, res) => {

    const user = await User.findById(req.params.userId);
    const projects = await user.getProjects();
    const farzad = 'kir';
    res.send(projects);
};
export const linkProjectToUser = async (req, res) => {

    const userPromise = User.findById(req.params.userId);
    const projectPromise = Project.findById(req.body.projectId);

    const [user, project] = await Promise.all([userPromise, projectPromise]);

    if (project && user) {
        user.addProject(project);
        res.send(200);
    } else {
        res.send(500);
    }
};