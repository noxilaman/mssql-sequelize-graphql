const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('farmer_audits', {
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
    user_farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit_date1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    audit_age1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit_date2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    audit_age2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit1_1_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit1_1_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit1_2_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit1_2_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit1_3_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit1_3_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit2_4_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit2_4_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit2_5_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit2_5_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit2_6_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit2_6_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit2_7_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit2_7_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit2_8_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit2_8_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit3_9_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit3_9_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit3_10_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit3_10_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    audit3_11_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    audit3_11_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total_point: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grade: {
      type: DataTypes.STRING(20),
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
    tableName: 'farmer_audits',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_farmer_audits",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
