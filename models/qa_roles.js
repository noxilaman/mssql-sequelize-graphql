const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qa_roles', {
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
    role_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    broker_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    input_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    chem_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    conds: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    status: {
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
    }
  }, {
    sequelize,
    tableName: 'qa_roles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_qa_roles",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
