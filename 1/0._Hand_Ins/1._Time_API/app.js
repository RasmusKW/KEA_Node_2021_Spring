const express = require("express");
const app = express();

app.get("/time", (req, res) => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    res.send({ 'time' : hours + ' : ' + minutes });
});

//weekday array
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//shows the current weekday
app.get("/day", (req, res) => {
    const weekday = new Date().getDay();
    res.send({ day: weekdays[weekday] });
});

//month array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//shows the current month, taking use of the month array
app.get("/month", (req, res) => {
    const month = new Date().getMonth();
    res.send({ 'month' : months[month] });
});

//shows the Day, Month, Date and Year
app.get("/calendarday", (req, res) => {
    const calendar = new Date().toDateString();
    res.send({ 'calendar' : calendar });
});

app.listen(8080);
