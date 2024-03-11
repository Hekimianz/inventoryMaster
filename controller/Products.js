const pool = require("../model/db");

module.exports = {
  getAll: async (req, res) => {
    try {
      const query = await pool.query("SELECT * from products;");
      res.send(query.rows);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
    }
  },
};
