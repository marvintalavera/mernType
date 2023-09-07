'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: { addColumn: (arg0: string, arg1: string, arg2: any) => any; }, Sequelize: { STRING: any; }) {
    await queryInterface.addColumn(
      'destinations',
      'picture', //new column
      Sequelize.STRING,
    )
  },

  async down(queryInterface: { removeColumn: (arg0: string, arg1: string) => any; }, Sequelize: any) {
    await queryInterface.removeColumn(
      'destinations',
      'picture'
    )
  }
};
