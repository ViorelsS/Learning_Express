require("dotenv").config();
let express = require("express");
let app = express();

// app.METHOD(PATH, HANDLER) --> the handler is a function that Express calls when the route is matched.

absolutePath = __dirname + "/views/index.html";

app.use((req, res, next)=>{
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

// app.get("/", (req, res) =>res.send("Hello Express"));
app.get("/", (req, res) => res.sendFile(absolutePath));

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ message: "HELLO JSON" });
  } else {
    return res.json({ message: "Hello json" });
  }
});


module.exports = app;

