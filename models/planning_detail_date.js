const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planning_detail_date', {
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
    version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    planning_detail_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    plan_harvest: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    yeild: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    plan_value: {
      type: DataTypes.FLOAT,
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
    yeild_ae: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'planning_detail_date',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PlanningDetailDate",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
