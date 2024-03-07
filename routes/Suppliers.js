const express = require("express");
const router = express.Router();

const suppliersController = require("../controller/Suppliers");

router.get("/", suppliersController.getAll);

module.exports = router;
