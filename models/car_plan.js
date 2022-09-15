const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car_plan', {
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
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    plan_car_est: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_car_act: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_car_leave: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_car_arrive: {
      type: DataTypes.DATE,
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
    tableName: 'car_plan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_car_plan",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
