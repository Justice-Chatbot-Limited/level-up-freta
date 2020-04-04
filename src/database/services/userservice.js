import db from '../models';
const Users = db.users;
const Posts = db.posts;

class Userservices {

static findByEmail = async (email)=> {
    const user = await Users.findOne({
        where : {email}
    });
    if (!user) return null;
    return user;
}
static findUsername = async(username)=>{
    const user = await Users.findOne(
        {where: username,  attributes: [
            'user_id',
            'username',
            'email',
            'password'
         ] }
       
    );
    if (!user) return null;
    return user.dataValues;
}
static findUserId= async(user_id)=>{
    const user = await Users.findUserId(
        {where : {user_id}
        });
        if (!user) return null;
    return user;
}
static createUser = async (user)=>{
    const newUser = await Users.create(user);
    if(!newUser) return null;
    return newUser;
}
static allPosts = async (user_id)=>{
    const post =await Posts.findAll({
        where : {user_id}
    });
    if(!post) return null;
    return post;
}
static onePost = async(post_id) =>{
    const post = await Posts.findOne({where : {post_id}});
    if(!post) return null;
    return post;
}
static oneDelete = async(post_id)=>{
    const post = await Posts.destroy({where : {post_id}});
    if(!post) return err;
    return post;
}
static updatePost = async(post, post_id)=>{
    const updatePost = await Posts.updateOne(post, {where : {post_id}});
    if(!updatePost) return null;
      return updatePost;
}
static createPost = async(post)=>{
    const newPost = await Posts.create(post);
    if(!newPost) return null;
    return newPost;
}
}
export default Userservices;