const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farmer_cards', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'farmer_cards',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_farmer_cards",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
