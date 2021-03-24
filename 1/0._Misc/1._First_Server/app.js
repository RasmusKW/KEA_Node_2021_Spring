const express = require("express")
const app = express();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.get("/day", (req, res) => {
    const todaysWeekday = new Date().getDate();
    res.send({day: weekdays[todaysWeekday]});
});


app.get("/about", (req, res) => {
    res.send({about: "0.0.1"})
})

app.listen(8080);