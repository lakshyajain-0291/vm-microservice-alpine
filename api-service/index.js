const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Server VM API" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("API running on port 3000");
});
