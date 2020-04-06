import Token from "../helpers/token";
import Responses from "../helpers/response";
const checkAuth = async (req,res, next) => {  
    const authHeader = req.headers["authorization"];
    if(typeof authHeader !== 'undefined'){
        const data = Token.verifyToken(authHeader);
         if(!data){
              return Responses.handleError(400,"Unauthorized! user", res);
                   
         }
            req.user = data;
            next(); 
            }else{
                return Responses.handleError(403,"Header is undefined",res);
            }
}

export default checkAuth;
