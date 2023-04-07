const movieRouters = require('express').Router();
const MovieController = require('../controllers/MovieController');

movieRouters.get('/', MovieController.allMovie);
movieRouters.post('/', MovieController.createMovie);
movieRouters.get('/:id', MovieController.showMovie);
movieRouters.put('/:id', MovieController.updateMovie);
movieRouters.delete('/:id', MovieController.deleteMovie);

module.exports = movieRouters;
