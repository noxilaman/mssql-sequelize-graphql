const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chem_crops', {
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
    chemical_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate_per_area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    code_rat: {
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
    tableName: 'chem_crops',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ChemCrops",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
