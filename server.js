// REQUIRE EXPRESS
const express = require("express");
const app = express();
const fs = require('fs')


// ADD DATABASE
const db = require("./db/db.json");

// SET UP CROSS-ORIGIN RESOURCE SHARING
// https://medium.com/zero-equals-false/using-cors-in-express-cac7e29b005b
const cors = require("cors")

// SET UP SERVER TO LISTEN ON PORT 3000
let port = 3001;
app.use(cors())
app.use(express.json())
// SET UP API GET (READ) REQUEST
app.get("/api/notes", (request, respond) => {
    respond.json(db)
})

// SET UP API POST REQUEST
app.post("/api/notes", function (req, res) {
    let id = db.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(db), () => {
        res.json({...req.body,id:id})
    })
});

// SET UP API DELETE REQUEST

// CONSOLE.LOG MESSAGE TO CONFIRM SERVER IS RUNNING
app.listen(port,()=>console.log(`Server running on port ${port} with update`))