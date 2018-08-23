import bodyParser from 'body-parser';
import express from 'express';
const app = express();
import passport from 'passport';

import './passport';

app.use(passport.initialize({}));

app.use(bodyParser.json());

export default app;