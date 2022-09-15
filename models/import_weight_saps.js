const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_weight_saps', {
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
      type: DataTypes.STRING(20),
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
      type: DataTypes.INTEGER,
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
    aging: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    car_plate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    total_wg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pkg_qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wg_pkg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    net_wg: {
      type: DataTypes.FLOAT,
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
    lot_beforcrop: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ud_beforecrop: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lot_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    lot_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    inspection_type: {
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
    mat_des: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    plant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    batch: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lot_qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    post_to_ur: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    post_to_block: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    uom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lot_short_test: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    system_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lot_ud: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    plan_des: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper20: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper30: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper40: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper50: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper60: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_qc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_physical: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_pesticide: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_micro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_sensory: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status_usage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pallet_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'import_weight_saps',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_import_weight_saps",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
