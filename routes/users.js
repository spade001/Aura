var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers')
require('dotenv').config()
const {
  getLoginRegisterPage, getLogin, logOut, SignUpPage, postSignUp, login, landingPage, viewAllProducts, viewAllByCategory, viewAll_ByPriceRange, viewAllProducts_verifiedUser, productDetails,
  productDetails_verifiedUser, userAccount, getAddAddressPage, addNewAddress, getEditAddressPage, getAddressDetails, updateAddress, deleteAddress,
  updateProfile, viewCartPage, addToCart, viewWishlist, addToWishList, removeFromWishlist, addToCart_Wishlist, changeProductQty, removeCartProduct,
  proceedToCheckOut, placeOrder, getPaymentFailedPage, verifyPayment, clearCart, orderSuccessPage, viewOrders, viewOrderDetails, cancelOrder, returnOrder, searchBar,orderSeperatePage, errorPage
} = require('../controllers/userControllers');
const { verifyUser } = require('../middlewares/verification');


//Landing & View Products Routes
router.get('/', landingPage);
router.get('/viewAll', viewAllProducts);
router.get('/viewAll/:id', viewAllByCategory);
router.get('/viewAllByRange', viewAll_ByPriceRange);
router.get('/viewAllVerify', verifyUser, viewAllProducts_verifiedUser);  // while add to cart users verify through this route
router.get('/details/:id', productDetails);
router.get('/detailsVerify/:id', verifyUser, productDetails_verifiedUser); //if user not verified while add to cart it will route to this route and verify , then reload same page
router.get('/getSearch', searchBar)

//User-Login & SignUp Routes
router.get('/login-register', verifyUser, getLoginRegisterPage);
router.get('/login', getLogin);
router.post('/logIn', login)
router.get('/logOut', logOut);
router.get('/signUp', SignUpPage);
router.post('/signUp', postSignUp)


//User Account Routes
router.get('/account', verifyUser, userAccount);
router.get('/addAddress', verifyUser, getAddAddressPage);
router.post('/postAddress', verifyUser, addNewAddress);
router.get('/editAddress/:position', verifyUser, getEditAddressPage);
router.get('/getAddress', verifyUser, getAddressDetails);
router.post('/updateAddress', verifyUser, updateAddress);
router.get('/deleteAddress', verifyUser, deleteAddress);
router.post('/updateProfile', verifyUser, updateProfile)

//Wishlist Routes
router.get('/wishlist', verifyUser, viewWishlist);
router.get('/add-to-wishlist/:id', verifyUser, addToWishList)
router.post('/removeWishlist', verifyUser, removeFromWishlist)
router.post('/addToCartWishlist', verifyUser, addToCart_Wishlist)

//Cart Routes
router.get('/cart', verifyUser, viewCartPage);
router.get('/add-to-cart/:id', verifyUser, addToCart)
router.post('/change-product-quantity', verifyUser, changeProductQty)
router.post('/removeProduct', verifyUser, removeCartProduct)
router.get('/clearCart', verifyUser, clearCart)

//Order Routes
router.get('/ProceedToCheckOut', verifyUser, proceedToCheckOut)
router.post('/placeOrder', verifyUser, placeOrder)
router.get('/paymentFailed/:orderId', verifyUser, getPaymentFailedPage)
router.post('/verify-payment', verifyPayment)
router.get('/orderSuccess/:orderId', verifyUser, orderSuccessPage)
router.get('/viewOrders', verifyUser, viewOrders)
router.get('/orderDetails/:id', verifyUser, viewOrderDetails)
router.get('/cancelTheOrder', verifyUser, cancelOrder)
router.get('/returnTheOrder', verifyUser, returnOrder)
router.get('/orderpage',verifyUser,orderSeperatePage)
router.get('/userError',errorPage)

module.exports = router;
