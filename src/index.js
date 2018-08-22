import app from './express';
import chalk from 'chalk';

// Just to run the db connection once
import './models/index';

// Sets up the routes
import './controllers';

app.listen(3000, () => {
    console.log(chalk.blue.bgBlack.bold('Listening on port 3000!'));
});







