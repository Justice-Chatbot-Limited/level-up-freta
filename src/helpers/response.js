class Responses {
    static handleSuccess(statusCode, message, data, res) {
        return res.status(statusCode).json({
            status: statusCode,
            message,
            data
        });
    }
    static handleError(statusCode, err, res) {
        return res.status(statusCode).json({
            status: statusCode,
            err
        });
    }
}
export default Responses;
