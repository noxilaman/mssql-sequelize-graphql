const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chem_plan', {
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
    input_item_id: {
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
    tableName: 'chem_plan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_chem_plan",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
