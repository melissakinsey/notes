// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

var path = require("path");

// ROUTING

module.exports = function (app) {
  // HTML GET Requests
  // Below code defines a route handler for GET requests to the "/notes" endpoint.
  // In each of the below cases the user is shown an HTML page of content
  // 
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  
  // If no matching route is found, the code below sets up a route handler for all ("*") GET requests. It defaults to home. (See https://masteringjs.io/tutorials/express/app-get)
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })
};