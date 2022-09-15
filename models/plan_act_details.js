const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_act_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plan_act_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chemical_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rate: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ctype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    use_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(100),
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
    act_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cal_val: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    use_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    set_group: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plan_act_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_dta_index_plan_act_details_40_587149137__K2_1_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18",
        fields: [
          { name: "plan_act_id" },
        ]
      },
      {
        name: "PK_plan_act_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
