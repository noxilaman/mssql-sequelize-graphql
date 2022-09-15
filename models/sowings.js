const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sowings', {
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
    farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    land_size: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    item_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gps_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gps_seed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    grow_rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    grow_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    grow_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    relate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    n_pos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s_pos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_pos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    w_pos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifiedBy: {
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
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prev1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prev2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prev3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    head_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    current_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fail_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fail_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fail_condition: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    yield_rate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    amg_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ph_water: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ph_soy: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    land_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seed_code_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seed_pack_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seed_code_text: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seed_code_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    farmer_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    raw_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    yield_rate7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    qa_status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qc_status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    user_farmer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a2seed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    a3seed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    f_land: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    post_harvest_complain: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post_harvest_qc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post_harvest_qa: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    post_harvest_er: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    harvest_stage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    check_current_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    n_pos_current: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s_pos_current: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_pos_current: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    w_pos_current: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    land_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    same_land: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qa_grade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qa_risk: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seedperhole: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gaphole: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    seedperhole2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gaphole2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    area_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    groove_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sowings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "_dta_index_sowings_40_1419152101__K1_2_3_4_5_6_7_8_9_10_11_12_14_16_17_18_19_20_21_22_23_24_25_26_27_28_29_30_31_32_33_34_35_",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "_dta_index_sowings_40_1419152101__K14D_K53_K2_1_3_4_5_6_7_8_9_10_11_12_16_17_18_19_20_21_22_23_24_25_26_27_28_29_30_31_32_33_",
        fields: [
          { name: "start_date", order: "DESC" },
          { name: "user_farmer_id" },
          { name: "crop_id" },
        ]
      },
      {
        name: "PK_sowings_new",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
