const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chem_package', {
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
    small_unit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    package_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mat_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    package_in_big_unit: {
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
    tableName: 'chem_package',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_chem_package",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
