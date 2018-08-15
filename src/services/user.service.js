import {User} from "../models";

export const getUsers = (req, res) => {
    User.findAll().then(projects => {
        res.send(projects);
    })
};