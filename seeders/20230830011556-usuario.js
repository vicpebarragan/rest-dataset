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
    await queryInterface.bulkInsert('usuario', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        UsuarioID: 1,
        Nombre: 'Victor Peña',
        CorreoElectronico: "vicpebarragan@espol.edu.ec",
        Contrasena: "abc12345"

      },
      {
        UsuarioID: 2,
        Nombre: 'Stiven Rivera',
        CorreoElectronico: "stjorive@espol.edu.ec",
        Contrasena: "abc12345"
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
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
