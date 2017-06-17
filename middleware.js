var middleware = {
  requireAuthentication: (req, res, next) => {
    console.log(`El middleware se está ejecutando`);
    next();
  },
  logger: (req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl} ${new Date().toString()}`);
    next();
  }
};

module.exports = middleware;
