// server.js
const express = require("express");
const { json } = require("express/lib/response");
const mysql = require(`mysql`);
const app = express();
const port = 3000;
const DBconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "justDIE(0.5);",
  database: "password_manager",
});

app.get("/", (req, res) => {
  DBconnection.connect();
  DBconnection.query(
    "SELECT `username`, `password` FROM `users`;",

    (err, result) => {
      if (err) {
        console.error("error while excusting the query: " + err);
        res.status(500).send("internal server error");
      } else {
        console.log(result);
      }
    }
  );

  DBconnection.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
