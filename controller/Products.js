const pool = require("../model/db");

module.exports = {
  getAll: async (req, res) => {
    try {
      const query = await pool.query("SELECT * FROM products");
      res.send(query.rows);
    } catch (err) {
      res.send(err).status(404);
    }
  },
};
