const express = require("express");
const app = express();
const port = 4000;
const productsRoutes = require("./routes/Products");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", productsRoutes);

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
