const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qc_result_items', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qc_result_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qc_defect_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight_df_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight_df: {
      type: DataTypes.FLOAT,
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
    tableName: 'qc_result_items',
    schema: 'dbo',
    timestamps: false
  });
};
