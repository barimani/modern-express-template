import {Project} from "../models";

export default (req, res) => {
    Project.findAll().then(projects => {
        res.send(projects);
    });
};