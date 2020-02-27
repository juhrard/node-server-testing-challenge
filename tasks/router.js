const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ router: "tasks" });
});

module.exports = router;