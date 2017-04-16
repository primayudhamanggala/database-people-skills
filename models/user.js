'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.UserSkill),
        User.belongsToMany(models.Skill, {through: 'UserSkill'})
      }
    }
  });
  return User;
};
