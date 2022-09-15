const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('car_delivery_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    car_delivery_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bale_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recv_bale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qc_status: {
      type: DataTypes.CHAR(10),
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
    tableName: 'car_delivery_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_car_delivery_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
