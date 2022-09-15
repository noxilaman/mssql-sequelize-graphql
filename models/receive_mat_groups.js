const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receive_mat_groups', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    group_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifiedBy: {
      type: DataTypes.INTEGER,
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
    tableName: 'receive_mat_groups',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_receive_mat_groups",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
