let express = require('express');
let app = express();

// app.METHOD(PATH, HANDLER) --> the handler is a function that Express calls when the route is matched.

absolutePath = __dirname + '/views/index.html'

// app.get("/", (req, res) =>res.send("Hello Express"));
app.get("/", (req, res) => res.sendFile(absolutePath));
console.log("Hello World");




































 module.exports = app;
