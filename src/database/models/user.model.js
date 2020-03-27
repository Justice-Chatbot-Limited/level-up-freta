module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        user_id :{
            type: Sequelize.BIGINT(20),
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        email : {
            type: Sequelize.STRING,
            unique : true,
            allowNull : false
        },
        username :{
            type: Sequelize.STRING,
            unique : true,
            allowNull: false
        },
        password : {
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
    return Users;
}; 