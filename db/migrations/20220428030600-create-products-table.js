module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'products',
        {
          id: {
            type: Sequelize.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: Sequelize.UUIDV4,
          },

          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },

          price: {
            type: Sequelize.FLOAT,
            allowNull: false,
          },

          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },

          updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
          },
        },
        {
          schema: 'public',
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable(
        {
          tableName: 'products',
          schema: 'public',
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
