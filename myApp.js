let express = require('express');
let app = express();

// app.METHOD(PATH, HANDLER) --> the handler is a function that Express calls when the route is matched.

absolutePath = __dirname + '/views/index.html'

// app.get("/", (req, res) =>res.send("Hello Express"));
app.get("/", (req, res) => res.sendFile(absolutePath));
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req,res)=>res.json({"message": "Hello json"}));




































 module.exports = app;
