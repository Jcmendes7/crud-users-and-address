const express = require("express");
const router = express.Router();
const AddressController = require("../controllers/AddressController");

router.get("/", AddressController.userAddress);
router.post("/create", AddressController.createAddress);
router.put("/update/:id", AddressController.addressUpdate);
router.delete("/delete/:id", AddressController.deleteAddress);

module.exports = router;
