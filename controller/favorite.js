const { Favorites } = require('../models')

class FavoriteController {
  static async create(req, res) {
    try {
      let {
        id,
        title,
        description,
        thumbnail,
        authors,
        rating,
      } = req.body;

      let data = await Favorites.create({
        id,
        title,
        description,
        thumbnail,
        authors,
        rating,
      })

      res.status(201).json({ status: 'Success', data })
    } catch (err) {
      console.log(err)
      res.status(500).json({ err })
    }
  }

  static async get(req, res) {
    try {
      let data = await Favorites.findAll({ order: [['createdAt', 'DESC']] })

      res.status(200).json({ status: 'Success', data })
    } catch (err) {
      res.status(500).json({ err })
    }
  }

  static async delete(req, res) {
    try {
      await Favorites.destroy({ where: { id: req.params.id } })

      res.status(200).json({ status: 'Success', id_deleted: req.params.id })
    } catch (err) {
      console.log(err)
      res.status(500).json({ err })
    }
  }
}

module.exports = FavoriteController