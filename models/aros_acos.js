const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aros_acos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    aro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "ARO_ACO_KEY"
    },
    aco_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "ARO_ACO_KEY"
    },
    _create: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "0"
    },
    _read: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "0"
    },
    _update: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "0"
    },
    _delete: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'aros_acos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ARO_ACO_KEY",
        unique: true,
        fields: [
          { name: "aro_id" },
          { name: "aco_id" },
        ]
      },
    ]
  });
};
