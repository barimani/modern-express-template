import app from './express';


// Just to run the db connection once
import './models/index';

// Sets up the routes
import './controllers';

app.listen(3000, () => console.log('Example app listening on port 3000!'));







