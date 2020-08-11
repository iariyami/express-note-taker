const path = require("path");

module.exports = function (app) {
  // Sets index.html page as the initial page for server
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  // Sets notes.html as for /notes route on server
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};
