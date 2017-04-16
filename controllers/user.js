const db = require('../models')

module.exports = {
  create : (req, res) => {
    db.User.create(req.body)
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  getAll : (req, res) => {
    db.User.findAll({include:{model:db.Skill}})
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  update : (req, res) => {
    db.User.update(req.body, {where: {id: req.params.id}})
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      res.send(err.message)
    })
  },
  delete : (req, res) => {
    db.User.destroy({where: {id: req.params.id}})
    .then((user) => {
      db.UserSkill.destroy({where: {UserId: req.params.id}})
      .then((userskill) => {
        res.send('User information has been removed')
      })
    })
    .catch((err) => {
      res.send(err.message)
    })
  }
}
