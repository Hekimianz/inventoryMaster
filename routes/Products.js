const express = require("express");
const router = express.Router();

const productsController = require("../controller/Products");

router.get("/", productsController.getAll);
router.get("/:name", productsController.search);
router.post("/:id", productsController.addByOne);

module.exports = router;
