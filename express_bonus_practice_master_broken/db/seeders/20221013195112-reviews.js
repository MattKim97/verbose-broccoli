'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Reviews', [
      { content: 'There is nothing I love more than escaping one pandemic for another, 10/10', rating: 5, BoardgameId: 2, userId: 2 },
      { content: 'This game is far too long!', rating: 1, BoardgameId: 5, userId: 3 },
      { content: 'My friends and I really like this game, lots of replayability', rating: 4, BoardgameId: 6, userId: 4 },
      { content: '10/10, I can be a space pirate, favorite game hands down.', rating: 5, BoardgameId: 5, userId: 1 },
      { content: 'Not as cool as Gloomhaven, but still pretty dope', rating: 4, BoardgameId: 7, userId: 1 },
      { content: 'N/A', rating: 3, BoardgameId: 1, userId: 2 }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
