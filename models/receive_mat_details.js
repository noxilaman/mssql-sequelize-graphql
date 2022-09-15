const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receive_mat_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    receive_mat_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    real_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    real_unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    start_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    last_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    act_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    diff_weight: {
      type: DataTypes.FLOAT,
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
    },
    mat_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diff: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    receive_mat_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sub_input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receive_mat_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_receive_mat_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
