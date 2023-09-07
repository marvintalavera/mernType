'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: { createTable: (arg0: string, arg1: { id: { allowNull: boolean; autoIncrement: boolean; primaryKey: boolean; type: any; }; destination_id: { type: any; }; name: { type: any; }; continent_name: { type: any; }; country_name: { type: any; }; description: { type: any; }; author: { type: any; }; date_posted: { type: any; }; }) => any; }, Sequelize: { INTEGER: any; STRING: any; TEXT: any; DATE: any; }) {
    await queryInterface.createTable('destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destination_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      continent_name: {
        type: Sequelize.STRING
      },
      country_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      author: {
        type: Sequelize.STRING
      },
      date_posted: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface: { dropTable: (arg0: string) => any; }, Sequelize: any) {
    await queryInterface.dropTable('destinations');
  }
};