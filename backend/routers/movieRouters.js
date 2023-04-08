const movieRouters = require('express').Router();
const MovieController = require('../controllers/MovieController');

movieRouters.get('/', MovieController.allMovie);
movieRouters.get('/favorites', MovieController.readFavorite);
movieRouters.get('/:id', MovieController.showMovie);
movieRouters.post('/favorites/:movieId', MovieController.addFavorite);
module.exports = movieRouters;
