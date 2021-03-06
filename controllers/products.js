const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getAddProducts = (req, res, next) => {
    res.render('add-product',
        { pageTitle: 'Add Product',
          path: '/admin/add-product' });
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    console.log(products);
    res.render('shop',
        { prods: products,
          pageTitle: 'shop',
          path: '/' });
};