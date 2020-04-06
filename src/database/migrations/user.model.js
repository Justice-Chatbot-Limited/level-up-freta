module.exports ={
    up: (queryInferface, Sequelize) =>{
        return queryInferface.createTable("users", {
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
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
               },
               updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
               }
        });
    },
    down: (queryInferface)=>{
        return queryInferface.dropTable('users');
    },
};
