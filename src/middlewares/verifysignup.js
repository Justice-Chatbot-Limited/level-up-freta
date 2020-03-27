import Userservices from '../database/services/userservice';
import Response from '../helpers/response';
const checkUsername = async (req, res, next) => {
    const {username} = req.body;
    const usernameExist = await Userservices.findUsername({username});
    if (usernameExist){
        return Response.handleError(400,"Username already in use!",res);
    }
    next();
};

export default checkUsername;