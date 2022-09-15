const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sowing_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    land_size: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gps_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gps_seed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifiedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    seed_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    case_type: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sowing_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_sowing_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
