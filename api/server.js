require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectsRouter = require("../projects/router")
const tasksRouter = require("../tasks/router")

const server = express();

// Apply Middleware:

server.use(express.json());
server.use(cors());
server.use(helmet());

// Routes:

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.json({ api: "Running!" })
})

module.exports = server;