const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_region_mapping', {
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
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mapping: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viewable: {
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
    tableName: 'qa_region_mapping',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qa_region_mapping",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
