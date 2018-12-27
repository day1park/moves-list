require("dotenv").config();
const express = require("express");
const { client } = require("./db");

const app = express();

exports.app = app;

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

// app.get("/moves", (req, res) => {
//   client.query("select * from moves", (error, result) => {
//     res.json(result.rows);
//   });
// });

require("./routes");

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!!!!`)
);
// client.end();

process.on("SIGINT", function() {
  client
    .end()
    .then(() => console.log(" THE client has disconnected"))
    .catch(err => console.error("error during disconnection", err.stack))
    .finally(() => {
      process.exit();
    });
});
