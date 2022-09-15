const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('harvest_locks', {
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
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lock_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "U"
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
    tableName: 'harvest_locks',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_harvest_locks",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
