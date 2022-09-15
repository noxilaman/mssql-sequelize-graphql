const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receive_mat_units', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    short_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    diff_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(5),
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
    tableName: 'receive_mat_units',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_receive_mat_units",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
