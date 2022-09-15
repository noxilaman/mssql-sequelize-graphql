const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checklist_crops', {
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
    checklist_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    conds: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field_map_result: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    field_map_val: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(255),
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
    tableName: 'checklist_crops',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_checklist_crops",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
