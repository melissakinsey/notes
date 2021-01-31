// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var data = require("../db.json");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function(req, res) {
    res.json(data);
  });
  // API POST Requests
  // Below code handles when a user submits a note and thus submits data to the server.
  // When a user submits a note data (a JSON object)
  // ...the JSON is pushed
  // ---------------------------------------------------------------------------
    
  const userNote = {};
  userNote.id = Math.random() * 100;
  userNote.body = req.body.newNote
  data.push(userNote);
  //then we redirect it to the root route
  res.redirect('/');
  app.post("/api/notes", function(req, res) {
      data.push(req.body);
      res.json(data);
  });
  
  app.post('/deleteNote/:id', function (req, res) {
    console.log(req.params.id);
    const deleteNotes = data.filter(item => item.id != req.params.id);
    data = deleteNotes;
    return res.redirect('/');
  });
    
//   The URL for the delete request is “ /deleteNote/:id”
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  app.delete("/api/notes/:id", function(req, res) {
    // Empty out the arrays of data
    data.length = 0;
    res.json({ ok: true });
  });
};
