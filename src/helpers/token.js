import jwt from "jsonwebtoken";
class Token {
static verifyToken(token) {
    if(typeof data !== 'undefined'){
      return jwt.verify(token, 'process.env.JWT_SECRET_KEY'); 
    }
}
static generateToken(data = {}, expiresIn = { expiresIn: '2d' }) {    
    const token = jwt.sign({ data }, process.env.JWT_SECRET_KEY, expiresIn)  
     return token; 
    }
}
export default Token;