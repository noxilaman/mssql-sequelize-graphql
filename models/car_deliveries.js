const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car_deliveries', {
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
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    car_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    recv_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    car_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qc_sample: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qa_sample: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tent_cover: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    tie_busket: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    air_tube: {
      type: DataTypes.CHAR(10),
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
    tableName: 'car_deliveries',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_car_deliveries",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
