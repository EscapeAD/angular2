"use strict";

var express = require('express'),
    app = express();

app.get("/", function (req, res) {
  res.send("testing");
});

app.listen(3000, function () {
  console.log("Server Started");
});