function errorHandler(error, req, res, next) {
  console.log(error);
  if (error.name === 'Not Found') {
    res.status(404).json({ message: 'Data not found' });
  } else {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = errorHandler;
