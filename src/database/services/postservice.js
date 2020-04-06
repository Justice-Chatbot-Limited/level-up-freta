import db from '../models';
const Posts = db.posts;

class Postservices {
    static allPosts = async (user_id) => {
        const post = await Posts.findAll({
            where: { user_id }
        });
        if (!post) return null;
        return post;
    }
    static onePost = async (post_id) => {
        const post = await Posts.findOne({ where: { post_id } });
        if (!post) return null;
        return post;
    }
    static oneDelete = async (post_id) => {
        const posts = await Posts.findOne({ where: { post_id } });
        if (!posts) return null;
        const post = posts.destroy();
        if (!post) return null;
        return post;
    }
    static updatePost = async (post, post_id) => {
        const posts = await Posts.findOne({ where: { post_id } });
        if (!posts) return null;
        console.log(post)
        const updatePost = await posts.update(post);
        if (!updatePost) return null;
        return updatePost;
    }
    static createPost = async (post) => {
        const newPost = await Posts.create(post);
        if (!newPost) return null;
        return newPost;
    }
}
export default Postservices;
