import app from "../express";
import userRoute from './users.route';
import projectRoute from './project.route';

app.use('/users', userRoute);
app.use('/projects', projectRoute);

