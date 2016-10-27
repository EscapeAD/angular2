const express = require('express'),
      app     = express();


app.locals.title = 'Realtor';

app.get("/", function(req,res){
  res.send("testing");
});

app.listen(3000, function(){
    console.log("Server Started");
});
