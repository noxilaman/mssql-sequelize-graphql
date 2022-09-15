const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provinces', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    th_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    en_name: {
      type: DataTypes.STRING(100),
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
    tableName: 'provinces',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_provinces",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
