import Response from '../helpers/response';
import Password from '../helpers/password';
import Token from '../helpers/token';
import Userservices from '../database/services/userservice';

class authControll{
static async signup(req, res){
    try{
    const hashPassword = Password.hashPassword(req.body.password); 
    const {username, email} = req.body;
    const userData = { username,email,password:hashPassword};
    const user = await Userservices.createUser(userData);
    const token = Token.generateToken(user.user_id) 
     return Response.handleSuccess(201,{user,token},'Successful registered',res);
    }catch (err){
        return Response.handleError(500,err.message,res);
        }
}

static async signin(req,res){
    const {username, password} = req.body;
    try{
    const user = await Userservices.findUsername({username});
    console.log(user);
  if(!user||  !Password.comparePass(
        password,
        user.password
    )){
        Response.handleError(404,"Incorrect credentials",res);
    }
   const token = Token.generateToken(user.user_id) 
    return Response.handleSuccess(200,'Successful loggedIn',{username: user.username,token},res);
}  catch (err) {
    Response.handleError(500,err.message,res);
   throw err;
}
}

}
export default  authControll;

