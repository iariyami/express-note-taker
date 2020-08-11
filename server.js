const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Port that local host server lives in
const PORT = process.env.PORT || 8080;

// Express App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
