const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insect_acts', {
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
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    check_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_of_rdm_pod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight_of_rdm_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    num_of_found: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight_of_found: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    num_of_worm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weight_of_worm: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    attach_dir1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attach1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attach_dir2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attach2: {
      type: DataTypes.STRING(100),
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
    tableName: 'insect_acts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_insect_acts",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
