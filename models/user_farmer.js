const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_farmer', {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    farmer_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
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
    custom1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    custom2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    custom3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    custom4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    custom5: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_farmer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_dta_index_user_farmer_40_1643152899__K1_2_3_4_5_6_7_8_9_10_11_12_13_14_15",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "_dta_index_user_farmer_40_1643152899__K2_1",
        fields: [
          { name: "crop_id" },
        ]
      },
      {
        name: "_dta_index_user_farmer_40_1643152899__K2_K4_K8_K6_K5_K3_K1_K7_9_10_11_12_13_14_15",
        fields: [
          { name: "crop_id" },
          { name: "manager_id" },
          { name: "head_id" },
          { name: "area_id" },
          { name: "broker_id" },
          { name: "user_id" },
          { name: "id" },
          { name: "farmer_id" },
        ]
      },
      {
        name: "PK_user_farmer",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
