const router = require("express").Router();

const Projects = require("./model");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
});

module.exports = router;