const router = require('express').Router();
const movieRouters = require('./movieRouters');
const genreRouters = require('./genreRouters');
const errorHandler = require('../middleware/errorHandler');

router.use('/movies', movieRouters);
router.use('/genres', genreRouters);

router.use(errorHandler);

module.exports = router;
