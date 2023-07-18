require("dotenv").config();
let express = require("express");
let app = express();

// app.METHOD(PATH, HANDLER) --> the handler is a function that Express calls when the route is matched.

absolutePath = __dirname + "/views/index.html";

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

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

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => res.json({ time: req.time })
);


app.get('/:word/echo', (req,res, next)=>{
res.json({"echo": req.params.word});
});


app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({
      name: `${firstName} ${lastName}`
    });
  });
module.exports = app;
