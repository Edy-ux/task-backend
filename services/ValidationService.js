import { Types } from 'mongoose';
import IdInvalidException from '../errors/IdInvalidException.js';

class ValidationService {
    validateId(id, next) {
        if (!Types.ObjectId.isValid(id)) {
            next(new IdInvalidException());
            return true;
        }
        return false;
    }
}
export default new ValidationService();
