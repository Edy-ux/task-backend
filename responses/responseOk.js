import HttpStatusCode from './httpStatusCode.js';

function responseOk(res, body) {
    const status = HttpStatusCode.OK;
    const message = 'Ok';
    const error = false;

    return res.status(status).send({
        status,
        message,
        error,
        body,
    });
}

export default responseOk;
