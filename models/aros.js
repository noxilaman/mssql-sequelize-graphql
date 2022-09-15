const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aros', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    model: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lft: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rght: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aros',
    schema: 'dbo',
    timestamps: false
  });
};
