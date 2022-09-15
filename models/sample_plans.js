const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sample_plans', {
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
    date_plan: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_harvest: {
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
    land_value: {
      type: DataTypes.FLOAT,
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
    marked: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sample_qa: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sample_qc: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qa_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    qc_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    qa_recv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qc_recv: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qc_result_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    qc_result_txt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qa_status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qc_status: {
      type: DataTypes.STRING(10),
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
    }
  }, {
    sequelize,
    tableName: 'sample_plans',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_sample_plans",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
