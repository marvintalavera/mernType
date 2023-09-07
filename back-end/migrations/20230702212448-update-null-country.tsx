'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: { changeColumn: (arg0: string, arg1: string, arg2: { allowNull: boolean; }) => any; }, Sequelize: any) {
    return Promise.all([
       queryInterface.changeColumn('destinations', 'cuntry_name', {
        allowNull: true
      })
    ])
  },
  async down(queryInterface: { changeColumn: (arg0: string, arg1: string) => any; }, Sequelize: any) {
    return Promise.all([queryInterface.changeColumn('destinations', 'country_name')])
  }
};
