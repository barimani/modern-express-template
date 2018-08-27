// @ts-ignore
import {UserRepository, Project} from "../models/index.ts";
import {User} from "../models/User.repository";

export const getUsers = async (_req: any, res: any) => {
    const users : User[] = await UserRepository.findAll();
    res.send(users);
};
export const createUser = async (req: any, res: any) => {
    const {username, birthday} = req.body;
    const user: User = await UserRepository.create({username, birthday});
    res.send(user);
};
export const getUser = async (req: any, res: any) => {
    const user: User = await UserRepository.findById(req.params.userId);
    res.send(user);
};
export const getUsersProjects = async (req: any, res: any) => {
    const user: User = await UserRepository.findById(req.params.userId);
    const projects = await user.getProjects();
    res.send(projects);
};
export const linkProjectToUser = async(req: any, res: any) => {
    const userPromise : Promise<User> = UserRepository.findById(req.params.userId);

    const projectPromise = Project.findById(req.body.projectId);

    const [user, project] = await Promise.all([userPromise, projectPromise]);
    if (project && user) {
        await user.addProject(project);
        res.send(200);
    } else {
        res.send(500);
    }
};