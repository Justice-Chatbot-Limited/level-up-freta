import jwt from "jsonwebtoken";

class Token {
    static verifyToken(token) {
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // if(err){return err;}
        return data.data;

    }
    static generateToken(data = {}, expiresIn = { expiresIn: '2d' }) {
        const token = jwt.sign({ data }, process.env.JWT_SECRET_KEY, expiresIn)
        return token;
    }
}
export default Token;
