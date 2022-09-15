const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'cities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_cities",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
