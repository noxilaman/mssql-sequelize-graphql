const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cake_sessions', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cake_sessions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_cake_sessions",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
