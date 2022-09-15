const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plannings', {
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
    item_input_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_type_id: {
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
    plan_kg_area: {
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
    max_per_day: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    start_sowing: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plannings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_plannings",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
