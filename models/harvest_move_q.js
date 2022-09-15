const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('harvest_move_q', {
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
    harvest_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "M"
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "W"
    },
    mat_type: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    havest_by: {
      type: DataTypes.STRING(5),
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
      type: DataTypes.STRING(200),
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
    tableName: 'harvest_move_q',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_harvest_move_q",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
