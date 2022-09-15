const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alert_q_details', {
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
    alert_q_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    case_sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    distance: {
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
    tableName: 'alert_q_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_alert_q_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
