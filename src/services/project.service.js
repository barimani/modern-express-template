import {Project} from "../models/index.ts";

export const getProjects = async (req, res) => {
    const projects = await Project.findAll();
    res.send(projects);
};
export const createProject = async (req, res) => {
    const {title} = req.body;
    const project = await Project.create({title});
    res.send(project);
};