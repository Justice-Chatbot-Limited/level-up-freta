import bcrypt from 'bcryptjs';

class Password {
static hashPassword(pass){
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(8));
    }
static comparePass(pass,datapass){
    return bcrypt.compareSync(
            pass,
            datapass
        );
    }
}
export default Password;