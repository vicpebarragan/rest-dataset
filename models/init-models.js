var DataTypes = require("sequelize").DataTypes;
var _actividad = require("./actividad");
var _materia = require("./materia");
var _usuario = require("./usuario");
var _usuario_actividad = require("./usuario_actividad");

function initModels(sequelize) {
  var actividad = _actividad(sequelize, DataTypes);
  var materia = _materia(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuario_actividad = _usuario_actividad(sequelize, DataTypes);

  actividad.belongsToMany(usuario, { as: 'UsuarioID_usuarios', through: usuario_actividad, foreignKey: "ActividadID", otherKey: "UsuarioID" });
  usuario.belongsToMany(actividad, { as: 'ActividadID_actividads', through: usuario_actividad, foreignKey: "UsuarioID", otherKey: "ActividadID" });
  usuario_actividad.belongsTo(actividad, { as: "Actividad", foreignKey: "ActividadID"});
  actividad.hasMany(usuario_actividad, { as: "usuario_actividads", foreignKey: "ActividadID"});
  actividad.belongsTo(materia, { as: "Materium", foreignKey: "MateriaID"});
  materia.hasMany(actividad, { as: "actividads", foreignKey: "MateriaID"});
  usuario_actividad.belongsTo(usuario, { as: "Usuario", foreignKey: "UsuarioID"});
  usuario.hasMany(usuario_actividad, { as: "usuario_actividads", foreignKey: "UsuarioID"});

  return {
    actividad,
    materia,
    usuario,
    usuario_actividad,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
