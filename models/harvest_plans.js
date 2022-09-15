const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('harvest_plans', {
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
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seed_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_type: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    havest_by: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ref_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mat_type: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    delivery_status: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      defaultValue: "(NN"
    },
    date_plan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_est: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_act: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    value_est: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    value_bf_harvest: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    value_act: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    reject_status: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    reject_note: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    qa_grade: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    run_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    selected_location: {
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
    }
  }, {
    sequelize,
    tableName: 'harvest_plans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_harvest_plans",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
