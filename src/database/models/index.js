import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/config';
var basename  = path.basename(__filename);
var env  = process.env.NODE_ENV || 'development';
var db   = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
   sequelize = new Sequelize(config.database, config.username, config.password, config[env]);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.users = require("../models/user.model")(sequelize, Sequelize);
module.exports = db;
