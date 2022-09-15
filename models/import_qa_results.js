const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_qa_results', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    row: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plant: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    crop_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rm_group: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    plan_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    harvest_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sampling_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    material_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    material_description: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    farmer_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    farmer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    village: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    broker_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    broker_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    er_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mng_er_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    inspection_lot: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lot_ud: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    system_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    oper: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    work_center: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    point_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    samping_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    result_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    point_ud: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    item: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mic_description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    specification: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    result: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    uom: {
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
    import_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sowing_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crop_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'import_qa_results',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_import_qa_results",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
