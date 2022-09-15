const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planning_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    planning_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    plan_value: {
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
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_yeild: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    plan_areas: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    harvest_age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'planning_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_planning_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
