const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receive_mats', {
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
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    car_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    receive_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    transfer_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    receive_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    harvesting_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    receive_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    harvest_type_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "L"
    },
    qa_sample_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    qc_sample_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tent: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tie_basket: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    air_tube: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    washing: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    washing_condition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "R"
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
    start_weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receive_mats',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_receive_mat",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
