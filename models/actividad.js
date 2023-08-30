const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actividad', {
    ActividadID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NombreActividad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FechaEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MateriaID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'materia',
        key: 'MateriaID'
      }
    }
  }, {
    sequelize,
    tableName: 'actividad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ActividadID" },
        ]
      },
      {
        name: "MateriaID",
        using: "BTREE",
        fields: [
          { name: "MateriaID" },
        ]
      },
    ]
  });
};
