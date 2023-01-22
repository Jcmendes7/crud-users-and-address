const db = require("../database/models");
const { randomUUID } = require("node:crypto");

async function getAllUsers(req, res) {
  const allUsers = await db.Users.findAll();
  return res.json(allUsers);
}

async function getUserById(req, res) {
  const { id } = req.params;
  const showUser = await db.Users.findOne({
    where: {
      id,
    },
  });

  return res.json(showUser);
}

async function getUserByIdWithAddress(req, res) {
  const { id } = req.params;
  const userAddressId = await db.Address.findAll({
    where: {
      fk_user: id,
    },
  });

  if (userAddressId.length > 0) {
    return res.json(userAddressId);
  } else {
    return res.json("Usuário ainda não tem um endereço cadastrado");
  }
}

async function createUser(req, res) {
  const { fullName, email, password } = req.body;

  const UserCreate = await db.Users.create({
    fullName,
    email,
    password,
  });

  return res.json(UserCreate);
}

async function userUpdate(req, res) {
  const { id } = req.params;

  const { fullName, email, password } = req.body;

  await db.Users.update(
    {
      fullName,
      email,
      password,
    },

    {
      where: {
        id,
      },
    }
  );

  return res.json("updated user");
}

async function deleteUser(req, res) {
  const { id } = req.params;

  await db.Users.destroy({
    where: {
      id,
    },
  });

  return res.json("deleted user");
}

module.exports = {
  getAllUsers,
  createUser,
  userUpdate,
  deleteUser,
  getUserByIdWithAddress,
  getUserById,
};
