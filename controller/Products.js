const pool = require("../model/db");

module.exports = {
  getAll: async (req, res) => {
    try {
      const query = await pool.query(
        "SELECT * from products ORDER BY productid;"
      );
      res.send(query.rows);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
    }
  },
  search: async (req, res) => {
    try {
      const name = req.params.name;
      const query = await pool.query(
        "SELECT * FROM products WHERE LOWER(productname) LIKE LOWER($1)",
        [`%${name}%`]
      );
      res.send(query.rows);
    } catch (err) {
      console.error("Error fetching products: ", err);
      res.satus(500).send("Error fetching products");
    }
  },
  editQuantity: async (req, res) => {
    try {
      const id = req.params.id;
      const newQuantity = req.body.newQuantity;
      const query = await pool.query(
        "UPDATE products SET quantityavailable = $1 WHERE productid = $2",
        [newQuantity, id]
      );
      res.send("Quantity updated");
    } catch (err) {
      console.error("Error modifying quantity: ", err);
      res.status(500).send("Error modifying quantity");
    }
  },
};
