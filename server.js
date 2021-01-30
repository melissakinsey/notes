const express = require('express')
const App = express()
let port = 3000;




    // / api / notes

App.listen(port,()=>console.log(`server running on port ${port} with update`))