const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('broker_areas', {
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
    area_id: {
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
    tableName: 'broker_areas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_broker_areas",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
