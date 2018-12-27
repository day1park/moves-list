const { app } = require("../server");
const { client } = require("../db");

app.get("/moves", (req, res) => {
  client.query("select * from moves", (error, result) => {
    res.json(result.rows);
  });
});
