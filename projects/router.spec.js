const request = require("supertest");

const server = require("../api/server.js");

describe("projects router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/projects", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/projects")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return projects as the router value", function() {
      return request(server)
        .get("/api/projects")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/projects")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return an array of projects (async version)", async function() {
      const res = await request(server).get("/api/projects");

      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("POST /api/projects", function() {
    it("should return 201 OK", function() {
      return request(server)
        .post("/api/projects").send({name: "test3", description: "test"})
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });

  describe("UPDATE /api/projects", function() {
    it("should return 201 OK", function() {
      return request(server)
        .put("/api/projects/1").send({name: "test2", description: "test2"})
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });

  describe("DELETE /api/projects", function() {
    it("should return 201 OK", function() {
      return request(server)
        .delete("/api/projects/1")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
