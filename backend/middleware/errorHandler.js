function errorHandler(error, req, res, next) {
  console.log(error);
  if (error.name === 'Not Found') {
    res.status(404).json({ message: 'Data not found' });
  } else if (error.name === 'addFavoriteUnique') {
    res.status(400).json({ message: 'The movie is already in favorites' });
  } else {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = errorHandler;
