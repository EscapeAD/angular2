"use strict";

var express = require('express'),
    app = express();

app.get("/", function (res, req) {
  res.send("testing");
});

app.listen(3000, function () {
  console.log("Server Started");
});
