const MyCollege = (req, res, next) => {
  res.send("Welcome to My College!");
  next();
};

module.exports = MyCollege;
