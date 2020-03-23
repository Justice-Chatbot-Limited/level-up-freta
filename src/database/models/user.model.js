module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      
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
           }
    });
    return Users;
};