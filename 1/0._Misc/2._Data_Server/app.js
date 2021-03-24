const express = require("express")
const app = express();

app.get("/querystring", (req, res) => {
    res.json({query: req.query});
});

app.get("/pathvariable/:message/:title", (req,res) =>{
    res.send({
        message: req.params.message,
         title: req.params.title
    });
})

app.post("/whatver", (req,res) => {
    console.log(req.body);
    res.send({body: req.body})
})


app.listen(8080)