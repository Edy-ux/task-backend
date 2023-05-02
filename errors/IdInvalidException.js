import httpStatusCode from '../responses/httpStatusCode.js';
import HttpException from './HttpException.js';

class IdInvalidException extends HttpException {
    constructor() {
        super(httpStatusCode.BAD_REQUEST, 'Id inválido, favor verificar.');
    }
}

export default IdInvalidException;
