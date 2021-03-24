const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    
});


app.get("/terminal", (req, res) => {
    res.sendFile(__dirname + '/public/terminal.html');
});


app.get("/theory", (req, res) => {
    res.sendFile(__dirname + '/public/theory.html');
});

app.get("/tools", (req, res) => {
    res.sendFile(__dirname + '/public/tools.html');
});

app.use(express.static('public'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(PORT));
});