const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chemicals', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
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
    formula_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    standard_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate_per_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    bigunit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    package_per_bigunit: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ctype: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chemicals',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_chemicals",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
