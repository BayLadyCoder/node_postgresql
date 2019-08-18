const express = require("express");
const { Client } = require("pg");
const connectionString = "postgres://postgres:postgres@localhost:5433/testdb";
const client = new Client({
  connectionString: connectionString
});
client.connect();

var app = express();

app.get("/api/todos", function(req, res, next) {
  client.query("SELECT * FROM todos;", function(err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(result.rows);
  });
});

app.post("/", function(req, res, next) {
  // Handle the post for this route
});

app.listen(4000, function() {
  console.log("Server is running.. on Port 4000");
});
