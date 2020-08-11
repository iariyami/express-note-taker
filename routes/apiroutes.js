const path = require("path");
const fs = require("fs");

const notesDb = require("../db/db.json");
const db = "./db/db.json";

// API ROUTING

module.exports = function (app) {
  // GET Requests
  app.get("/api/notes", function (req, res) {
    res.json(notesDb);
  });

  app.get("/api/notes/:id", (req, res) => {
    res.json(notesDb.id);
  });

  // POST Requests
  app.post("/api/notes", function (req, res) {
    // Pulls note from db,json and creates new notes
    const newNote = {
      id: notesDb.length + 1,
      title: req.body.title,
      text: req.body.text,
    };

    notesDb.push(newNote);
    fs.writeFile(db, JSON.stringify(notesDb), () => {
      console.log("There's a new note!");
    });
    res.json(newNote);
  });

  // Delete Notes
  app.delete("/api/notes/:id", function (req, res) {
    const arrIndexNum = req.params.id - 1;
    const db = "./db/db.json";

    notesDb.splice(arrIndexNum, 1);
    for (let i = 0; i < notesDb.length; i++) {
      notesDb[i].id = i + 1;
    }
    fs.writeFile(db, JSON.stringify(notesDb), () => {
      console.log("Note Deleted");
    });
    res.json(true);
    res.json(notesDb);
  });
};
