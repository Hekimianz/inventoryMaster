const express = require("express");
const app = express();
const port = 4000;
const productsRoutes = require("./routes/Products");

app.use("/", productsRoutes);

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
