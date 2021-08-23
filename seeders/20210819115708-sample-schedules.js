'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "schedules",
      [
        {
          
          user_id: "0",
          day: "1",
          startAt: "2:00",
          endAt: "4:00",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          user_id: "0",
          day: "2",
          startAt: "2:00",
          endAt: "4:00",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          user_id: "0",
          day: "3",
          startAt: "2:00",
          endAt: "4:00",
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          user_id: "2",
          day: "5",
          startAt: "8:00",
          endAt: "16:00",
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
