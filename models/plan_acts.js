const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_acts', {
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
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    plan_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    re_plan_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    act_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    spray_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
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
    farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sample_status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plan_acts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_dta_index_plan_acts_40_619149251__K2_K8_K6_K16_K3_K4_K14_1_5_7_10_11_12_13_15_17",
        fields: [
          { name: "crop_id" },
          { name: "act_date" },
          { name: "plan_date" },
          { name: "age" },
          { name: "sowing_id" },
          { name: "plan_schedule_id" },
          { name: "farmer_id" },
        ]
      },
      {
        name: "_dta_index_plan_acts_40_619149251__K6_K4_K14_K2_K15_K8",
        fields: [
          { name: "plan_date" },
          { name: "plan_schedule_id" },
          { name: "farmer_id" },
          { name: "crop_id" },
          { name: "priority" },
          { name: "act_date" },
        ]
      },
      {
        name: "_dta_index_plan_acts_c_10_1957582012__K3_K4",
        fields: [
          { name: "sowing_id" },
          { name: "plan_schedule_id" },
        ]
      },
      {
        name: "PK_plan_acts_new",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
