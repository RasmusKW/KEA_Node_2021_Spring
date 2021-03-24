const express = require("express")
const app = express();

app.use(express.json());
let id = 3;

let plants = [
    
    {
        id: 1,
        title: "Pitcher Plant"
    },
    
    {

        id: 2,
        title: "Venus Flytrap"
    }
];


app.get("/", (req, res) => {
    res.send("Hello and welcome to my site with Carnivorus Plants");
});

app.get("/plants", (req, res) => {
    res.send({plants});
});


app.get("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    res.send({foundPlant: foundPlant});
});

app.post("/plants/", (req,res) => {
    const newPlant = req.body;
    newPlant.id = id++;
    plants.push(newPlant)
    res.send({data: newPlant})

})


app.patch("/plants/:id", (req, res) => {
    let plantUpdated = false;
    plants = plants.map(plants => {
        if (plant.id === Number(req.params.id)){
            plantUpdated = true;
            return {...plant.body ,...plant, id: plant.id}    
        }
        return plant;
    });
    res.send({data: plantUpdated})
})

app.delete("/plants/:id", (req,res) => {
    plants = plants.filter(plant => plant.id !== Number(req.params.id));
    res.send({})
    
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080);
});