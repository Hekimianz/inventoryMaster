const express = require("express");
const router = express.Router();

const productsController = require("../controller/Products");

router.get("/", productsController.getAll);

module.exports = router;
