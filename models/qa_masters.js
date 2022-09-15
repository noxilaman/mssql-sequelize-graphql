const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_masters', {
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
    qa_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    plan_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    receive_sample_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    test_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    result_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    summary_result: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    result_qa: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sample_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    test_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ref_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retest_flag: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    loc_type: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "P"
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
    tableName: 'qa_masters',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qc_masters",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
