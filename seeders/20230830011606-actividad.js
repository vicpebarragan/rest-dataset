'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('actividad', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        ActividadID: 1,
        NombreActividad: 'Proyecto',
        Descripcion: "Proyecto 7",
        FechaEntrega: "01/09/23",
        Estado: "Calificado",
        MateriaID: 1

      },
      {
        ActividadID: 2,
        NombreActividad: 'Examen',
        Descripcion: "Examen final",
        FechaEntrega: "01/09/23",
        Estado: "Por entregar",
        MateriaID: 2
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('actividad', null, {});
  }
};
