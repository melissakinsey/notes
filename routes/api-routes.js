// LINK ROUTES TO DATA ARRAYS
var data = require("../db.json");

// ROUTING
module.exports = function (app) {
  
  // API GET Request //
  app.get("/api/notes", function(req, res) {
    res.json(data);
  });
  // API POST Request: User submits a note, thereby submitting data to the server and pushing the JSON object.
  
  const userNote = {};
  userNote.id = Math.random() * 100;
  userNote.body = req.body.newNote
  data.push(userNote);
  //then we redirect it to the root route
  res.redirect("/");
  app.post("/api/notes", function(req, res) {
    data.push(req.body);
    res.json(data);
  });
  
  app.post("/deleteNote/:id", function (req, res) {
    console.log(req.params.id);
    const deleteNotes = data.filter(item => item.id != req.params.id);
    data = deleteNotes;
    return res.redirect("/");
  });
  
  //   The URL for the delete request is “ /deleteNote/:id”. The code below empties the data from the arrays.
  app.delete("/api/notes/:id", function(req, res) {
    // Empty out the arrays of data
    data.length = 0;
    res.json({ ok: true });
  });
};
