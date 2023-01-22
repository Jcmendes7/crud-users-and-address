const express = require("express");
const router = express.Router();
const AddressController = require("../controllers/AddressController");

router.get("/users", AddressController.userAddress);
router.post("/users", AddressController.createAddress);
router.put("/users/:id", AddressController.addressUpdate);
router.delete("/users/:id", AddressController.deleteAddress);

module.exports = router;
