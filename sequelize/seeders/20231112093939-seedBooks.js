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
    await queryInterface.bulkInsert('Books', [{
      title: 'Asymmetric Affections',
      author: 'Daniadjtnk',
      publisher: 'Djatniko',
      year: 2023,
      pages: 211,
      image: 'value',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      title: 'The Smell Of Petrichor',
      author: 'Daniadjtnk',
      publisher: 'Djatniko',
      year: 2023,
      pages: 223,
      image: 'value',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Books', null, {})
  }
};
