const {
  getProducts,
  saveProducts,
} = require("../controllers/products.controller");

const router = require("express").Router();

router.get("/products", getProducts);

router.post("/products", saveProducts);

module.exports = router;
