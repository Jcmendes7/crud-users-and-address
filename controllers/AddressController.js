const db = require("../database/models");

async function userAddress(req, res) {
  const showAddress = await db.Address.findAll();
  return res.json(showAddress);
}

async function createAddress(req, res) {
  const { street, district, city, state, house_number, fk_user } = req.body;
  await db.Address.create({
    street,
    district,
    city,
    state,
    house_number,
    fk_user,
  });

  return res.json("Created Address");
}

async function addressUpdate(req, res) {
  const { id } = req.params;
  const { street, district, city, state, house_number } = req.body;

  await db.Address.update(
    {
      street,
      district,
      city,
      state,
      house_number,
    },
    {
      where: {
        id,
      },
    }
  );
  return res.json("Endereço Atualizado");
}

async function deleteAddress(req, res) {
  const { id } = req.params;
  await db.Address.destroy({
    where: {
      id,
    },
  });

  return res.json("endereço deletado");
}

module.exports = {
  createAddress,
  addressUpdate,
  userAddress,
  deleteAddress,
};
