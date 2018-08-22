import express from 'express';
import {createUser, getUser, getUsers, getUsersProjects, linkProjectToUser} from "../services/user.service";

const router = express.Router({});
router.get('/', getUsers);
router.post('/', createUser);

const userDetailRouter = express.Router({mergeParams: true});
router.use('/:userId', userDetailRouter);
userDetailRouter.get('/', getUser);
userDetailRouter.get('/project', getUsersProjects);
userDetailRouter.post('/project', linkProjectToUser);

export default router;
