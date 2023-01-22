module.exports = (Sequelize, DataType) => {
  const User = Sequelize.define(
    "Users",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      fullName: {
        type: DataType.STRING,
        allowNull: false,
      },

      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataType.TEXT,
        allowNull: false,
      },

      address: {
        type: DataType.VIRTUAL,
        get() {
          return `http://localhost:3000/users/${this.id}`;
        },
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  User.associate = (listModels) => {
    User.hasMany(listModels.Address, {
      foreignKey: "fk_user",
      as: "user",
    });
  };

  return User;
};
