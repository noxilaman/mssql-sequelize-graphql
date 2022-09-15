const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lock_gpx', {
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
    dt_lock_gpx: {
      type: DataTypes.DATE,
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
    tableName: 'lock_gpx',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_lock_gpx",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
