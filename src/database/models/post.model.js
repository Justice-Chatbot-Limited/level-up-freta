module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define("posts", {
        post_id :{
            type: Sequelize.BIGINT(20),
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        poster : {
            type: Sequelize.STRING,
            allowNull : false
        },
        title :{
            type: Sequelize.STRING,
            unique : true,
            allowNull: false
        },
       description : {
            type: Sequelize.STRING,
            allowNull:false
           },
           createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
           },
           updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
           }

    });
    return Posts;
}; 