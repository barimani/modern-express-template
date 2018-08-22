import express from 'express';
import {createProject, getProjects} from "../services/project.service";

const router = express.Router({});
router.get('/', getProjects);
router.post('/', createProject);

export default router;
