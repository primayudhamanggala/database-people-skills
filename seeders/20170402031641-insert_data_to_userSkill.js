'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('UserSkills', [
      {value : 9 ,UserId: 1, SkillId: 1},
      {value : 8 ,UserId: 1, SkillId: 2},
      {value : 6 ,UserId: 1, SkillId: 3},
      {value : 7 ,UserId: 2, SkillId: 4},
      {value : 8 ,UserId: 2, SkillId: 5},
      {value : 10 ,UserId: 3, SkillId: 1},
      {value : 8 ,UserId: 4, SkillId: 2},
      {value : 6 ,UserId: 4, SkillId: 3},
      {value : 7 ,UserId: 5, SkillId: 4},
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('UserSkills', null, {})
  }
};
