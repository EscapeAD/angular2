const express = require('express'),
      app     = express();



app.get("/", function(res,req){
  res.send("testing");
})
