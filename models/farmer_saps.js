const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farmer_saps', {
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
    sap_farmer_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    file_name: {
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
    tableName: 'farmer_saps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_farmer_saps",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
