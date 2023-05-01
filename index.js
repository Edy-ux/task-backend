import App from './app.js';
import TaskController from './controllers/UserController.js';

const app = new App([new TaskController()]);
const PORT = process.env.PORT || 6001;
app.listen(PORT);
