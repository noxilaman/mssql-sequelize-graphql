const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qc_result_masters', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crop_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    receive_mat_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    receive_mat_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    check_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    check_weight_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    df_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    df_weight_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    random_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    random_no_unit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    obj_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    obj_weight_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rm_qa_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    iqf_qa_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    p_df_all: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_other_help: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_cri_help: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_all_help_laco: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_other_help_laco: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_cri_help_laco: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_qc_net: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    weight_grade_qc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    weight_grade_qc_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modified_by: {
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
    tableName: 'qc_result_masters',
    schema: 'dbo',
    timestamps: false
  });
};
