var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");

var app = express();

// var logger = function(req,res,next){ // Middleware
//     console.log("Logging...");
//     next();
// }

// app.use(logger); // Log to terminal 

//View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
    {
        id:1,
        first_name: "Sannie",
        last_name: "Pap",
        email: "sannie@gmail.com"
    },
    {
        id:2,
        first_name: "Jannie",
        last_name: "Pap",
        email: "jannie@gmail.com"
    },
    {
        id:3,
        first_name: "Pietie",
        last_name: "Pap",
        email: "pietie@gmail.com"
    }
]

app.get("/", function(req,res){
    res.render("index", {
        title: "Customers",
        users: users
    });
});

app.listen(3001, function() {
    console.log("SUKSES!! Server started on port 3000");
})