var express = require("express");
var app = express();
var PORT = 3000;
// localhost:3000
// app.get("/", (req, res) => {
//     res.send("Merhaba express!!")
// })

var middleware = {
    requireAuthentication : (req, res, next) => {
        console.log("Özel route girildi!!");
        next();
    },
    logger : (req, res, next) => {
        console.log(req.method + " " + req.originalUrl);
        next();
    }
}

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthentication, (req, res) => {
    res.send("Hakkımda sayfası")
})

app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log("Express Server " + PORT + " nolu portta çalışıyor..");
});