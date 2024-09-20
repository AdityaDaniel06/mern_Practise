const productInfo = (req, res) => {
  res.send('Product Information !!!');
};

const productPrice = (req, res) => {
  res.send('Product Price ');
};

const productStatus = (req, res) => {
  res.send('Product in stock');
};
const productLanding = (req, res) => {
  res.render('home');
};

const about = (req, res) => {
  res.render('about');
};

const contact = (req, res) => {
  res.render('contact');
};

const productList = (req, res) => {
  res.render('products');
};

module.exports = {
  productInfo,
  productPrice,
  productStatus,
  productLanding,
  about,
  contact,
  productList,
};
