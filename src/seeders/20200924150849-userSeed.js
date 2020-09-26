'use strict';

const bcrypt =  require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash("123456", salt);

    await queryInterface.bulkInsert('user', [{
      nickname: "JuanB",
      email:"testUser@mail.com" ,
      password:pass,
    },{
      nickname: "PedroB",
      email:"testUser2@mail.com" ,
      password:pass,
    }])
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('user', null, {})
  }
};
