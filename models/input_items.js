const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('input_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tradename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    common_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    size: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pur_of_use: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RM_Group: {
      type: DataTypes.STRING(50),
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
    tableName: 'input_items',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_input_items",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
