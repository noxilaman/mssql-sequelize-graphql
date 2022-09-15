const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seed_codes', {
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
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    val_per_area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    seed_per_kg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pack_date: {
      type: DataTypes.DATEONLY,
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
    tableName: 'seed_codes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_seed_codes",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
