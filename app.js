const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

var items=["Do Meditation","Play Badmiton","Revise Old Things","Learn New Things","Do Some Coding"];
app.get("/",function(req,res){
  var today = new Date();
  var option = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }

  thatday=today.toLocaleDateString("en-us",option);

  res.render("index",{day : thatday, item : items });
});
app.post("/",function(req,res){
  items.push(req.body.newList);
  res.redirect("/");
});



app.listen(process.env.PORT || 3000,function(){
  console.log("server working fine");
});
