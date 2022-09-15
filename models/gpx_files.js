const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gpx_files', {
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
    gpxname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    gpx_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gpx_realname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'gpx_files',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_gpx_files",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
