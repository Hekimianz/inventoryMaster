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
        "SELECT * FROM products WHERE productname = $1",
        [name]
      );
      res.send(query.rows);
    } catch (err) {
      console.error("Error fetching products: ", err);
      res.satus(500).send("Error fetching products");
    }
  },
};
