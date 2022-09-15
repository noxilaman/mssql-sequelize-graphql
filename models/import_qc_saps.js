const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_qc_saps', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    line: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mapstatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    crop_id: {
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
    wg_plant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    crop: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rm_group: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wg_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wg_doc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wg_item: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wg_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wg_time: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    harvest_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sampling_plan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    farmer_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    inspection_lot: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    material: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broker_run: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    car_run: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num_defect: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    worm_crept_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wormy_pods: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    destroy_from_insect: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rotten_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    antracnose: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    downy_mildew: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    others_disease: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    scar: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    scar_from_disease: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    brown_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    purple_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    one_seed_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    hin_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    one_seed_missing_half: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    short_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    missshape: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    yellowish: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    bruise: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    string_off: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dirty_frm_soil: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dirty_frm_sand: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    stem_leave: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    shrink_pod: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    damage_harvester: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    other_wast: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    formula_1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_defect_sum_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_defect_g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_defect_cal_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pod_per_500g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    lower3cm: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    more5cm: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    defect_grade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sample_worm_g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    worm_qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    worm_wg_g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    worm_cal_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wormy_qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wormy_wg_g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wormy_cal_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_worm_sum_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    damage_by_worm_qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    damage_by_worm_wg_g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    damage_worm_cal_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    brown_pod_qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    brown_pod_wg_g: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    brown_pod_perc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_defect_sum_perc2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    worm_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    car_tube: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tent_cover: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    basket_broken: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pesticide_japan: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_pesticide: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    usage_decision: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'import_qc_saps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_import_qc_saps",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
