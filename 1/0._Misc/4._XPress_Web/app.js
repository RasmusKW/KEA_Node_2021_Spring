const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/welcome/welcome.html');
});

app.get("/dragons", (req, res) => {
    res.sendFile(__dirname + '/public/dragons/dragons.html');
});


app.get("/crypto", (req, res) => {
    res.sendFile(__dirname + '/public/crypto/crypto.html');
});

app.get("/potato", (req, res) => {
    console.log(req.query);
    if(req.query.q === "spud"){
        return res.send({type: "petite potato"})
    }
    return res.send({lifePhilosophy: "My life is potato. I have potato blood in my veins."})
})

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});