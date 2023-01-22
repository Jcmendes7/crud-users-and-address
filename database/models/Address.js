module.exports = (Sequelize, DataType) => {
  const Address = Sequelize.define(
    "Address",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      street: {
        type: DataType.STRING,
        allowNull: false,
      },

      district: {
        type: DataType.STRING,
        allowNull: false,
      },

      city: {
        type: DataType.STRING,
        allowNull: false,
      },

      state: {
        type: DataType.STRING,
        allowNull: false,
      },

      house_number: {
        type: DataType.INTEGER,
        allowNull: false,
      },

      fk_user: {
        type: DataType.INTEGER,
        allowNull: true,
      },
    },

    {
      tableName: "address",
      timestamps: false,
    }
  );

  Address.associate = (listModels) => {
    Address.belongsTo(listModels.Users, {
      foreignKey: "fk_user",
      as: "user",
    });
  };

  return Address;
};
