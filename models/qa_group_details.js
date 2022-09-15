const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_group_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qa_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sample_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
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
    tableName: 'qa_group_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qc_group_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
