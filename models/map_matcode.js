const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('map_matcode', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crop_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_by: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "L"
    },
    harvest_to: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "N"
    },
    matcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'map_matcode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_map_matcode",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
