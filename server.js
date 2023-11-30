const bodyParser = require("body-parser");
const express = require("express");
const { route } = require("express/lib/application");
const app = express();

// Parse app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes");
routes.app;

app.listen(3000, () => {
  console.log(`Server started on port`);
});
