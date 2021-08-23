'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "User1s",
      [
        {
          firstName: "James",
          secondName: "Bond",
          user_id: "0",
          email: "james.bond@gmail.com",
          password: "b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          firstName: "Tony",
          secondName: "Stark",
          user_id: "1",
          email: "starkrulz@gmail.com",
          password: "b836ebba36776b21dd0f5cdca497bff65c5bdfc8411cfbfe0111f27bde1c1894",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          firstName: "Ali",
          secondName: "G",
          user_id: "2",
          email: "nameisnotborat@gmail.com",
          password: "b836b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete("User1s", null, {});

  }
};
