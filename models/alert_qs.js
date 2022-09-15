const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alert_qs', {
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
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_act_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_act_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    case_txt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cond_range: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
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
    tableName: 'alert_qs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_alert_qs",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
