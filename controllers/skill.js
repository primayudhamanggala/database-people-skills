const db = require('../models');


module.exports = {
  create : (req, res) => {
    db.Skill.create(req.body)
    .then((skill) => {
      res.send(skill)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  getAll : (req, res) => {
    db.Skill.findAll()
    .then((skill) => {
      res.send(skill)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  update : (req, res) => {
    db.Skill.update(req.body, {where: {id: req.params.id}})
    .then((skill) => {
      res.send(skill)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  delete : (req, res) => {
    db.Skill.destroy({where: {id: req.params.id}})
    .then((skill) => {
      res.send('Skill has been deleted')
    })
    .catch((err) => {
      res.send(err.message)
    })
  }
}
