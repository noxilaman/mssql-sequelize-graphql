const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('standard_code', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    standard_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chemical_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MRLs: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    major_type: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    type_code: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'standard_code',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_standard_code2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
