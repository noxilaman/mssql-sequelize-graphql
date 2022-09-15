const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qc_defects', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    process_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    set_group: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    normal_flag: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cri_flag: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modified_by: {
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
    tableName: 'qc_defects',
    schema: 'dbo',
    timestamps: false
  });
};
