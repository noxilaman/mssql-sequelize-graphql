const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAP_EXZ892GSB0010', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Weight_date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Weight_time: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    weight_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Harvest_Date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hv_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Weight_Doc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Item: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sample_plan_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Crop_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Inspection_Lot: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RM_Group: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Operation_No: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Work_Center: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Material: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Material_Des: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Batch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Broker_No: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Broker_Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Farmer_Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Village: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Aging: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Package_Qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Packaging: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Total_Weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Net_Weight: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Car_Plate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    System_Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UD_lot: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UD_Operation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0001: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0026: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0027: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0028: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0107: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0030: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0031: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0032: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0033: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0034: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0035: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0036: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0037: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0038: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0039: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0040: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0041: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0042: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0043: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0044: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0045: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0046: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0047: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0048: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0049: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0050: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNFML001: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0055: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0051: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0105: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0052: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0053: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0054: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QLPH0016: {
      type: DataTypes.STRING(50),
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
    crop_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SAP_EXZ892GSB0010',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SAP_EXZ892GSB0010",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
