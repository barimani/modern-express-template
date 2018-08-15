import {app} from './config';
import {setupControllers} from "./controllers";


setupControllers();

app.listen(3000, () => console.log('Example app listening on port 3000!'));







