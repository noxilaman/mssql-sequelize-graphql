const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_rate_chems', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qa_rate_set_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chemical_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    mrl: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom8: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom9: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom10: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom11: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom12: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom13: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom14: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom15: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom16: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom17: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom18: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom19: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    custom20: {
      type: DataTypes.FLOAT,
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
    tableName: 'qa_rate_chems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qa_rate_chems",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
