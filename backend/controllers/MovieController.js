const { Movie, Genre } = require('../models/index');
const { Op } = require('sequelize');
class MovieController {
  static async createMovie(req, res, next) {
    try {
      const { title, synopsis, trailerUrl, imgUrl, rating, genreId } = req.body;
      let movie = await Movie.create({ title, synopsis, trailerUrl, imgUrl, rating, genreId });

      res.status(201).json({
        message: 'Success created movie',
        movie,
      });
    } catch (error) {
      next(error);
    }
  }

  static async allMovie(req, res, next) {
    try {
      const { search } = req.query;

      let movies;
      if (search) {
        movies = await Movie.findAll({
          include: [
            {
              model: Genre,
              attributes: ['id', 'name'],
            },
          ],
          where: {
            title: { [Op.iLike]: `%${search}%` },
          },
          order: [['createdAt', 'DESC']],
        });
      } else {
        movies = await Movie.findAll({
          include: [
            {
              model: Genre,
              attributes: ['id', 'name'],
            },
          ],
          order: [['createdAt', 'DESC']],
        });
      }

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
      let movie = await Movie.findByPk(+id);

      if (!movie) {
        throw { name: 'Not Found' };
      }

      res.status(200).json({ movie });
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const { id } = req.params;
      const { title, synopsis, trailerUrl, imgUrl, rating, genreId } = req.body;

      let findMovie = await Movie.findByPk(+id);

      if (!findMovie) {
        throw { name: 'Not Found' };
      }

      await Movie.update({ title, synopsis, trailerUrl, imgUrl, rating, genreId }, { where: { id } });

      res.status(200).json({
        message: `Success updated movie : ${findMovie.title}`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const { id } = req.params;
      let movie = await Movie.findByPk(+id);
      await Movie.destroy({ where: { id } });

      if (!movie) {
        throw { name: 'Not Found' };
      }

      res.status(200).json({
        message: `${movie.title} success to delete`,
        movie,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController;
