const router = require("express").Router();

const Projects = require("./model");

router.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
});

router.post("/", (req, res) => {
  Projects.add(req.body)
    .then(added => {
      res.status(201).json(added)
    })
    .catch(error => {
      res.status(500).json({ message: "error" })
    })
})

router.put("/:id", (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(updated => {
      res.status(200).json(updated)
    })
    .catch(error => {
      res.status(500).json({ message: "error" })
    })
})

router.delete("/:id", (req, res) => {
  Projects.remove(req.params.id)
    .then(deleted => {
      res.status(200).json(deleted)
    })
})

function validateProject(req, res, next) {
  Projects.findById(req.params.id)
    .then(res => {
      console.log(res)
      if(res) {
        req.project = res;
        next();
      } else {
        res.status(400).json({ message: "No Project with this ID" })
      }
    })
    .catch(err => res.status(500))
}

module.exports = router;