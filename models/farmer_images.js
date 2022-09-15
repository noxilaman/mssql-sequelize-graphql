const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farmer_images', {
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
    farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attach_dir: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attach: {
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
    tableName: 'farmer_images',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_farmer_images",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
