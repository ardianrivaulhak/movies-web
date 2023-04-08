'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Genre, { foreignKey: 'genreId' });
      Movie.hasMany(models.Favorite, { foreignKey: 'movieId' });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
      trailerUrl: {
        type: DataTypes.STRING,
      },
      imgUrl: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
      genreId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
