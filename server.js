const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

// Port that server lives in
const PORT = process.env.PORT || 8080;

// Express App
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
