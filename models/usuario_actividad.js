const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_actividad', {
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'UsuarioID'
      }
    },
    ActividadID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'actividad',
        key: 'ActividadID'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario_actividad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UsuarioID" },
          { name: "ActividadID" },
        ]
      },
      {
        name: "ActividadID",
        using: "BTREE",
        fields: [
          { name: "ActividadID" },
        ]
      },
    ]
  });
};
