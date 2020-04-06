import db from '../models';
const Users = db.users;


class Userservices {

    static findByEmail = async (email) => {
        const user = await Users.findOne({
            where: { email }
        });
        if (!user) return null;
        return user;
    }
    static findUsername = async (username) => {
        const user = await Users.findOne(
            {
                where: username, attributes: [
                    'user_id',
                    'username',
                    'email',
                    'password'
                ]
            }

        );
        if (!user) return null;
        return user.dataValues;
    }
    static findUserId = async (user_id) => {
        const user = await Users.findUserId(
            {
                where: { user_id }
            });
        if (!user) return null;
        return user;
    }
    static createUser = async (user) => {
        const newUser = await Users.create(user);
        if (!newUser) return null;
        return newUser;
    }

}
export default Userservices;
