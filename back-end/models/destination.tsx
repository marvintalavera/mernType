'use strict';
const {
 
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: { INTEGER: any; STRING: any; TEXT: any; DATE: any; }) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Destination.init({
    destination_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    continent_name: {
      type: DataTypes.STRING,
      allowNull: true
  },
    country_name: {
      type: DataTypes.STRING,
      allowNull: true
  },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
  },
    author:{
      type: DataTypes.STRING,
      allowNull: true
  },
    date_visited: {
      type: DataTypes.DATE,
      timestamps: false,
      allowNull: true
  },
  picture: {
    type: DataTypes.TEXT
},
 }, {
    sequelize,
    modelName: 'Destination',
    tableName:'destinations',
    timestamps: false
  });
  return Destination;
};
