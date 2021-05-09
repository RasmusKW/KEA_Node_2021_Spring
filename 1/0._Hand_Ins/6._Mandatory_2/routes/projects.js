const router = require("express").Router();

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
