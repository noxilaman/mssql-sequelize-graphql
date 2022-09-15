const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crops', {
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
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sap_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    linkurl: {
      type: DataTypes.STRING(50),
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
    },
    max_per_day: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crops',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_crops",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
