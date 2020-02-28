const db = require("../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db('projects');
}

function findBy(filter) {
  return db('projects').where(filter);
}

function remove(id) {
  return db('projects').where('id', id).del();
}

function update(id, project) {
  return db('projects').where('id', id).update(project)
}

function add(project) {
  return db('projects').insert(project);
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}
