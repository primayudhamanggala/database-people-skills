'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill = sequelize.define('Skill', {
    skillName: {
      type: DataTypes.STRING,
      validate: {
        isUnique: (value, next) => {
          Skill.find({where : {skillName: value}})
          .done((exists) => {
            ((exists)) ? next('Skill name is already exist') : next()
          })
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Skill.hasMany(models.UserSkill),
        Skill.belongsToMany(models.User, {through: 'UserSkill'})
      }
    }
  });
  return Skill;
};
