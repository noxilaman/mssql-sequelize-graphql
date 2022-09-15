const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_schedule_plan_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tmp_schedule_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chemical_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ctype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    rate: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    set_group: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    p_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    p_unit_id: {
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
    tableName: 'tmp_schedule_plan_details',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tmp_schedule_plan_details",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
