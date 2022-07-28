const express = require("express");
const db = require("./db");
const router = require("./routes/public");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
// //connect db
// db()
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({extended:false, limit: "50mb" }));


const port = process.env.PORT || 5000;


 
  app.listen( port, ()=>{
    console.log(`Server Started at http://localhost:${port}`)
  })

  app.use("/api/v1", router);

module.exports = app;