const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sowing_shows', {
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
    sowing_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "N"
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
    tableName: 'sowing_shows',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_sowing_shows",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
