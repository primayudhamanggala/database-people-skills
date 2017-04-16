'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSkill = sequelize.define('UserSkill', {
    value: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        UserSkill.belongsTo(models.User, {foreignKey: 'UserId'})
        UserSkill.belongsTo(models.Skill, {foreignKey: 'SkillId'})
      }
    }
  });
  return UserSkill;
};
