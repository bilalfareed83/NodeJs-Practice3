const firstMiddlewar = (req, res, next) => {
  console.log('first middleware called');
  next();
};

const secondMiddlewar = (req, res, next) => {
  console.log('first middleware called');
  req.uniqueId = Math.random(Math.random(1) * 1000);
  next();
};

module.exports = {
  firstMiddlewar,
  secondMiddlewar,
};
