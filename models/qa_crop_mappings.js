const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_crop_mappings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    crop_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qa_rate_set_id: {
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
    tableName: 'qa_crop_mappings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qa_crop_mappings",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
