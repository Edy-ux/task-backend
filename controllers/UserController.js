import Controller from './Controller.js';

import User from '../schemas/User.js';
import responseOk from '../responses/responseOk.js';

class UserController extends Controller {
    constructor() {
        super('/user');
    }

    initRoutes() {
        this.router.get(this.path, this.list);
        //this.router.get(`${this.path}/:id`, this.findById);
        //this.router.post(this.path, this.create);
        this.router.put(`${this.path}/:id`, this.edit);
        // this.router.delete(`${this.path}/:id`, this.delete);
    }

    async list(req, res, next) {
        try {
            const users = await User.find();

            if (users.length) {
                responseOk(res, users);
            }
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async findById(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) return;

            const user = await User.findById(id);
            if (user) return responseOk(res, user);
        } catch (error) {
            res.status(401).json({ msg: error.message });
        }
    }

    /*    async create(req, res, next) {
        try {
            let user = req.body;

            // UserService.checkStatusFinished(User);
            user = await User?.create(user);
            // eslint-disable-next-line spaced-comment
            //User = await User.findById(User.id).populate('responsible');

            // return responseCreate(res, User);
        } catch (error) {
            next(new ServerErrorException(error));
        }
    } */

    async edit(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) return;

            const user = await User.findByIdAndUpdate(id, req.body, () => {});
            if (user) return responseOk(res, user);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) return;
            const user = await User.findById(id);
            if (user) {
                user.deleteOne();
                return responseOk(res, User);
            }

            next(new NoContentException());
        } catch (error) {
            next(new ServerErrorException(error));
        }
    }
}

export default UserController;
