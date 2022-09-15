const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farmers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    address3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sub_cities: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    province_id: {
      type: DataTypes.INTEGER,
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
    tableName: 'farmers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_farmers",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
