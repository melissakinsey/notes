// REQUIRE EXPRESS
const express = require("express");
const app = express();

// ADD DATABASE
const db = require("./db/db.json");

// SET UP CROSS-ORIGIN RESOURCE SHARING
// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
const cors = require("cors")

// SET UP SERVER TO LISTEN ON PORT 3000
let port = 3000;
app.use(cors())

// SET UP API GET (READ) REQUEST
app.get("/api/notes", (request, respond) => {
    respond.json(db)
})

// CONSOLE.LOG MESSAGE TO CONFIRM SERVER IS RUNNING
app.listen(port,()=>console.log(`Server running on port ${port} with update`))