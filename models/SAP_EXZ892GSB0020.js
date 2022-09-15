const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAP_EXZ892GSB0020', {
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
      type: DataTypes.STRING(50),
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
    QNPH0106: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0014: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0015: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0016: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0017: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0018: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0019: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0101: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0020: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0021: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0022: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0023: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0024: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0025: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QNPH0055: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    QLPH0015: {
      type: DataTypes.STRING(50),
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
    tableName: 'SAP_EXZ892GSB0020',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SAP_EXZ892GSB0020",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
