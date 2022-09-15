const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prev_chem', {
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
    chem_package_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
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
    tableName: 'prev_chem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_prev_chem",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
