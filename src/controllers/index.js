import app from "../express";
import userRoute from './users.route';
import projectRoute from './project.route';
import login from '../services/login.service';

app.post('/login', login);
app.use('/users', userRoute);
app.use('/projects', projectRoute);

