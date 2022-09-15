const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syncTbDailyTruck', {
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
    tran_no: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    rcv_no: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    broker: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    b_name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    car_idf: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    rcv_datetime: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    weight_in: {
      type: DataTypes.REAL,
      allowNull: true
    },
    memo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tran_no_type: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    bill_close: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    not_use: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    not_use_because: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Personal_ID: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    StatusNow: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "T"
    },
    rcv_no2: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    num_Order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    farmer_id: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    f_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    stkcode: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    stkdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qultity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pack_id: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    pack_short: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    pack_weight: {
      type: DataTypes.REAL,
      allowNull: true
    },
    kgd_bf: {
      type: DataTypes.REAL,
      allowNull: true
    },
    kgd_af: {
      type: DataTypes.REAL,
      allowNull: true
    },
    kgd_s: {
      type: DataTypes.REAL,
      allowNull: true
    },
    kgd_r: {
      type: DataTypes.REAL,
      allowNull: true
    },
    kgd_b: {
      type: DataTypes.REAL,
      allowNull: true
    },
    qul_u: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    kgd_u: {
      type: DataTypes.REAL,
      allowNull: true,
      defaultValue: 0
    },
    Personal_ID2: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Name2: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    not_use2: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    dfmcode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    dfstepcode: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sowing_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    harvest_age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recv_date: {
      type: DataTypes.DATEONLY,
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
    mat_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    harvest_by: {
      type: DataTypes.STRING(10),
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
    tableName: 'syncTbDailyTruck',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_syncTbDailyTruck",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
