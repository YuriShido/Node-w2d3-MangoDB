const express = require('express');
// const productsController = require('../controllers/shop')
const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/add-products', adminController.getAddProducts);
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:productId', adminController.getEditProduct)
router.post('/edit-product', adminController.postEditProduct)
router.post('/delete-product', adminController.deleteProduct)


//---------------------------- export method 1
module.exports = router;

//----------------------------exportmethod 2
// module.exports = {
//     router: router,
//     someText: 'Some cool text
// }

//----------------------------export method 3
// exports.router = router;
// exports.someText = 'Some cool text'