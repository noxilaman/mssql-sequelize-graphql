const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_item_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qa_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qa_rate_chem_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    standard: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
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
    tableName: 'qa_item_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qc_chemical_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
