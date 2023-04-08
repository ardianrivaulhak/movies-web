const { Movie, Genre, Favorite } = require('../models/index');
const { Op } = require('sequelize');
class MovieController {
  static async allMovie(req, res, next) {
    try {
      const { title } = req.query;
      const condition = {
        title: { [Op.iLike]: title ? `%${title}%` : '%%' },
      };

      let movies = await Movie.findAll({
        where: condition,
        include: [
          {
            model: Genre,
            attributes: ['id', 'name'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });

      res.status(200).json({
        message: 'Success read movies',
        movies,
      });
    } catch (error) {
      next(error);
    }
  }

  static async showMovie(req, res, next) {
    try {
      const { id } = req.params;
      let movie = await Movie.findByPk(+id, {
        include: [
          {
            model: Genre,
            attributes: ['id', 'name'],
          },
        ],
      });

      if (!movie) {
        throw { name: 'Not Found' };
      }

      res.status(200).json({ movie });
    } catch (error) {
      next(error);
    }
  }

  static async addFavorite(req, res, next) {
    try {
      const { movieId } = req.params;

      const findMovie = await Movie.findByPk(+movieId);

      if (!findMovie) {
        throw { name: 'Not Found' };
      }

      const findFavorite = await Favorite.findOne({
        where: {
          movieId,
        },
      });

      if (findFavorite) {
        throw { name: 'addFavoriteUnique' };
      }

      const favorite = await Favorite.create({ movieId });

      res.status(201).json({
        message: 'Successfully added movie to favorites',
        favorite,
      });
    } catch (error) {
      next(error);
    }
  }

  static async readFavorite(req, res, next) {
    try {
      const favorites = await Favorite.findAll({
        include: [
          {
            model: Movie,
            include: [{ model: Genre }],
          },
        ],
      });
      res.status(200).json({
        message: 'Success read your favorite movie',
        favorites,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController;
