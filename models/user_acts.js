const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_acts', {
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
    plan_act_id: {
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
    act_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    act_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    age_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    growing_rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weed_rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    moisture_rate: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_other: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_other_text: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    insect1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_other: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_other_text: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    harvest: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    labor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sorting: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    volumn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disguise: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    harvest_other: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    follow_up: {
      type: DataTypes.DATEONLY,
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
    follow_case: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attach_dir: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attach: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    img_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    review_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spray_flag: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spray_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    spray_gallon: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spray_bodo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    spray_head: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spray_machine: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    spray_team: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    disease_val1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_val9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disease_valother: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_val9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    insect_valother: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alert_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_action_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_action_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    user_action_note: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_action_datetime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_acts',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_user_acts",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
