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
    await queryInterface.bulkInsert('materia', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        MateriaID: 1,
        NombreMateria: 'DAWM',
        Descripcion: "Desarrollo de Aplicaciones Web y Móviles"
      },
      {
        MateriaID: 2,
        NombreMateria: 'Lenguajes de Programación',
        Descripcion: "Materia orientada a aprender paradigmas con distintos LP"
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
    await queryInterface.bulkDelete('materia', null, {});
  }
};
