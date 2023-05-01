import { Router } from 'express';

class Controller {
    constructor(path) {
        this.router = Router();
        this.path = path;

        setTimeout(() => {
            this.initRoutes();
        }, 0);
    }
}

export default Controller;
