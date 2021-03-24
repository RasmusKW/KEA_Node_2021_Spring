const express = require("express")
const app = express();

app.use(express.json());


let flowers = [
    
    {
        id: 1,
        title: "Sunflower",
        blooming_season: "Summer, Fall",
        average_vase_life: "1-2 weeks"
    },
    
    {

        id: 2,
        title: "Daisies",
        blooming_season: "Spring, Summer",
        average_vase_life: "7-10 days"
    },

    {
        id: 3,
        title: "Lilies",
        blooming_season: "Spring, Summer",
        average_vase_life: "7-14 days"
    }
];

let id = flowers.length;

app.get("/", (req, res) => {
    res.send("Hello and welcome to Rasmus Flower site");
});

app.get("/flowers", (req, res) => {
    res.send({data: flowers});
});


app.get("/flowers/:id", (req, res) => {
    const id = Number(req.params.id);
    const foundFlower = flowers.find(flower => flower.id === id);
    res.send({data: foundFlower});
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});