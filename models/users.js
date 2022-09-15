const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    init: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    citizenid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    canEdit: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "N"
    },
    reviewteam: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
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
    tableName: 'users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_users2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
