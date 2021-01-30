// REQUIRE EXPRESS
const express = require("express");
const app = express();

// ADD DATABASE
const db = require("./db/db.json");
const cors = require("cors")

// SET UP SERVER TO LISTEN ON PORT 3000
let port = 3000;
app.use(cors())


// CONSOLE.LOG MESSAGE TO CONFIRM SERVER IS RUNNING
app.listen(port,()=>console.log(`Server running on port ${port} with update`))