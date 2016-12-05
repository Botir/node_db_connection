'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING
  },{
      tableName: 'users_user'
  }

  );
  return User;
};
