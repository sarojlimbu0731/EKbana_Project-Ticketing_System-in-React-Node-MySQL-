'use strict';
const jwt=require("jsonwebtoken")
var bcrypt = require('bcryptjs');
const Sequelize= require("sequelize")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync('admin', salt);

      await queryInterface.bulkInsert('users', [{
       name:"admin1",
       email:"admin1@gmail.com",
       password:hash,
       isAdmin:true

      }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {isAdmin:true}, {});
  }
};
