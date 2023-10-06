var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers')
const productHelpers = require('../helpers/product-helpers');
const categoryHelpers = require('../helpers/category-helpers');
const wishlistHelper = require("../helpers/wishList-helper")
const { response } = require('express');
require('dotenv').config()  


const paypal = require('paypal-rest-sdk');
const nodemon = require('nodemon');
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.SANDBOX_ID,
    'client_secret': process.env.CLIENT_SECRET
});


module.exports = {
    getLoginRegisterPage: (req, res, next) => {
        res.redirect('/');
    },
    getLogin: (req, res, next) => {
        res.redirect('/');
    },
    errorPage: (req, res) => {
        res.render('error')
    },
    login: async (req, res) => {
        try {
            let response = await userHelpers.doLogin(req.body)
            console.log("after dologin", response.status);
            if (response.status == false) {
                res.render('users/login-signUp', { 'emailError': "Invalid Credentials! " })
            } else if (response.active == false) {
                res.render('users/login-signUp', { 'emailError': "Your Account is Blocked!" })
            }
            else {
                req.session.loggedIn = true
                req.session.user = response.user
                cartCount = await userHelpers.getCartCount(req.session.user._id)
                const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
                res.redirect(req.session.returnTo)
            }
        } catch (error) {
            console.log(err);
            res.redirect('/userError');
        }

    },
    logOut: (req, res, next) => {
        try {
            req.session.loggedIn = false
            req.session.user = null
            res.redirect('/');
        } catch (error) {
            console.log(err);
            res.redirect('/userError');
        }

    },

    
    SignUpPage: async (req, res, next) => {
        let headerDetails = await userHelpers.getHeaderDetails(req.session.user?._id)
        res.render('users/signUp', { headerDetails })
    },
    postSignUp: (req, res) => {
        console.log(req.body);
        userHelpers.doSignUP(req.body).then((response) => {
            if (response.status == false) {
                res.render('users/signUp', { 'emailError': "Email / Mobile Number Already Exists" })
            } else {
                req.session.user = response.user
                res.redirect('/enterCoupon')   // need to login with password agin to 
            }
        })
    },
    landingPage: async function (req, res, next) {
        try {
            categoryProducts={}
            let headerDetails = await userHelpers.getHeaderDetails(req.session.user?._id)
            const bannerTop_main = await productHelpers.getBannerTop_main()
            const topDiscounted = await productHelpers.getTopDiscounted()
            const allProducts = await productHelpers.getAllProducts()
            const coverImg=await productHelpers.getBannerCover()
            console.log('I am the',coverImg);
            categoryProducts.topDiscounted = topDiscounted
            categoryProducts.allProducts = allProducts
            console.log("this is=====>"+bannerTop_main)
            res.render('users/user-home', { headerDetails, bannerTop_main, categoryProducts,headernone:true,coverImg})
        } catch (error) {
            console.log(error);
            res.redirect('/userError');
        }

    },
    viewAllProducts: async function (req, res, next) {
        if (req.session.productsTemp == null) req.session.productsTemp = await productHelpers.getAllProducts()
        const products = req.session.productsTemp
        const range = req.session.range
        req.session.productsTemp = null
        req.session.range = null
        console.log("rrrrrrrrrrrrr",range);
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user?._id)
        res.render('users/user-viewAll', { products, headerDetails, range })
    },
    viewAllByCategory: function (req, res, next) {
        console.log("inside the view all withgid");
        productHelpers.getCategoryProducts(req.params.id).then((products) => {
            req.session.productsTemp = products  // using this session in viewAll
            res.redirect('/viewAll')
        })
    },
    viewAll_ByPriceRange: function (req, res, next) {
        let range = {}
        range.min = parseInt(req.query.range1),
            range.max = parseInt(req.query.range2)
        productHelpers.filterPrice(req.query).then(async (products) => {
            req.session.productsTemp = products  // using this session in viewAll
            req.session.range = range
            res.redirect('/viewAll')
        })
    },
    viewAllProducts_verifiedUser: function (req, res, next) {
        res.redirect('/viewAll')
    },
    productDetails: async (req, res, next) => {
        try {
           
            let productId = req.params.id   //to get the clicked item id
            const headerDetails = await userHelpers.getHeaderDetails(req.session.user?._id)
            let product = await productHelpers.getProductDetails(productId)
            let category = product.category
            let categoryName = await productHelpers.getProductCategory(category)   // for showing top of the page
            let categoryTitle = await productHelpers.getCategoryProducts(category) //for showing down side of the page
            let showProductRadio=await product.flexRadioDefault
             if (await showProductRadio=="shoesizeoption"){
                var shoesizeoption=true
             }
            res.render('users/product-details', { product, categoryTitle, categoryName, headerDetails,shoesizeoption});
        } catch (err) {
            console.log(err);
            res.redirect('/userError');
        }

    },
    productDetails_verifiedUser: async (req, res, next) => {
        let productId = req.params.id   //to get the clicked item id
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user?._id)
        productHelpers.getProductDetails(productId).then((product) => {
            let category = product.category
            if( product.flexRadioDefault="shoesizeoption"){
                var shoesizeoption=true
            }
            productHelpers.getProductCategory(category).then((categoryName) => {
                productHelpers.getCategoryProducts(category).then((categoryTitle) => {
                    res.render('users/product-details', { product, categoryTitle, categoryName, headerDetails, shoesizeoption});
                })
            })
        })
    },
    userAccount: async (req, res, next) => {
        const orders = await userHelpers.getUserOrders(req.session.user._id)
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        const userDetails = await userHelpers.getUserDetails(req.session.user._id)
        const address = await userHelpers.getAllAddress(req.session.user._id)
        res.render('users/account', { orders, headerDetails, userDetails, address });
    },
    orderSeperatePage:async(req,res)=>{
        const orders = await userHelpers.getUserOrders(req.session.user._id)
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        res.render('users/orderspage', { orders,headerDetails });
    },
    getAddAddressPage: async (req, res, next) => {
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        res.render('users/addAddress', { headerDetails });
    },
    addNewAddress: async (req, res, next) => {
        const add = await userHelpers.addNewAddress(req.body, req.session.user._id)
        res.redirect('/account')
    },
    getEditAddressPage: async (req, res, next) => {
        let position = req.params.position
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        const getOneAddress = await userHelpers.getOneAddress(req.session.user._id, position)
        res.render('users/editAddress', { headerDetails, getOneAddress, position });
    },
    getAddressDetails: async (req, res, next) => {
        let addressId = req.query.addressId
        if (addressId != "Select") {
            let getOneAddress = await userHelpers.getOneAddressById(req.session.user._id, addressId)
            console.log(getOneAddress);
            let response = getOneAddress.Address
            response.status = true
            res.json(response)
        } else {
            res.json({ status: false })
        }
    },
    updateAddress: async (req, res, next) => {
        const update = await userHelpers.updateAddress(req.body, req.session.user._id,)
        res.redirect('/account')
    },
    deleteAddress: async (req, res, next) => {
        const deleteAddress = await userHelpers.deleteAddress(req.session.user._id, req.query.addressId)
        res.json(response)
    },
    updateProfile: async (req, res) => {
        let updatedUser = await userHelpers.updateAndFetchProfile(req.body)
        response.UserName = updatedUser.UserName
        response.UserEmail = updatedUser.UserName
        response.MobileNo = updatedUser.MobileNo
        // res.json(response)
    },
    viewCartPage: async (req, res, next) => {
        let userId = req.session.user._id                                              //also need to pass to hbs
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        userHelpers.getCartProducts(req.session.user._id).then(async (products) => {
            if (products) { 
                res.render('users/cart', { products, userId, headerDetails });
             }
            else { res.render('users/cartIsEmpty', { headerDetails }); }
            //if no products in cart render cart empty page
        })
    },
    addToCart: async (req, res, next) => {
        if (req.session.user == null) {
            res.json({ status: false })
        } else {
            var size
            console.log(")))))))))))))))))))))",req.query.size);
            if(req.query.size){
                 size=req.query.size
            }else{
                size="none"
            }
            console.log("...................",size);
            userHelpers.addToCart(req.params.id, req.session.user._id,size).then(async () => {
                const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
                userHelpers.getCartCount(req.session.user._id).then((response) => {
                    cartCount = response
                    res.json({ status: true })
                })
            })
        }
    },
    viewWishlist: async (req, res, next) => {
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        const productDetails = await wishlistHelper.getWishList(req.session.user._id)
        res.render('users/wishlist', { headerDetails, productDetails });
    },
    addToWishList: async (req, res, next) => {
        if (req.session.user == null) {
            res.json({ status: false })
        } else {
            wishlistHelper.addToWishList(req.params.id, req.session.user._id).then(async () => {
                res.json({ status: true })
            })
        }
    },
    removeFromWishlist: async (req, res, next) => {
        if (req.session.user == null) {
            res.json({ status: false })
        } else {
            wishlistHelper.deleteWishList(req.body).then(async (response) => {
                res.json({ status: true })
            })
        }
    },
    addToCart_Wishlist: async (req, res, next) => {
        let proId = req.body.proId
        if (req.session.user == null) {
            res.json({ status: false })
        } else {
            userHelpers.addToCart(proId, req.session.user._id).then(async () => {
                const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
                cartCount = await userHelpers.getCartCount(req.session.user._id)
                wishlistHelper.deleteWishList(req.body).then(async (response) => {
                    res.json({ status: true })
                })
            })
        }
    },
    changeProductQty: (req, res, next) => {
        userHelpers.changeProductQuantity(req.body).then(async (response) => {
            response.total = await userHelpers.getTotalAmount(req.body.user)
            res.json(response)
        })
    },
    removeCartProduct: (req, res, next) => {
        userHelpers.removeProduct(req.body).then(async (response) => {
            // response.total = await userHelpers.getTotalAmount(req.body.user)
            res.json(response)
        })
    },
    proceedToCheckOut: async (req, res) => {
        const products = await userHelpers.getCartProducts(req.session.user._id)
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        const address = await userHelpers.getAllAddress(req.session.user._id)
        res.render('users/placeOrder', { products, headerDetails, address })
    },
    placeOrder: async (req, res) => {
        // const couponApplied = parseInt(req.body.couponApplied)
        const products = await userHelpers.getCartProductsList(req.body.userId)
        const totalPrice = await userHelpers.getTotalAmount(req.body.userId)
        const cartDetailsWithOffer = await userHelpers.getCartProductsWithOffer(req.body.userId, totalPrice) //passing for implementing the coupon discount product level
        userHelpers.placeOrder(req.body, products, cartDetailsWithOffer, totalPrice).then((orderId) => {
            if (req.body['payment_method'] === 'COD') {
                cartCount = 0
                response.orderId = orderId
                response.codSuccess = true
                res.json(response)
            }
        })
    },
    getPaymentFailedPage: async (req, res) => {
        const deletePendingOrder = await userHelpers.deletePendingOrder(req.params.orderId)
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        res.render('users/paymentFailed', { headerDetails })
    },
    verifyPayment: (req, res) => {
        userHelpers.verifyPayment(req.body).then(() => {
            response.orderId = req.body['order[receipt]']
            response.status = true
            res.json(response)
        }).catch((err) => {
            console.log(err);
            res.json({ status: false })
        })
    },
    clearCart: (req, res) => {
        userHelpers.clearCart(req.session.user._id).then(() => {
            res.redirect('/cart')
        })
    },
    orderSuccessPage: async (req, res) => {
        console.log(req.params.orderId);
        const changeStatus = await userHelpers.changePaymentStatus(req.params.orderId, req.session.user._id)
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        let orderDetails = await userHelpers.getOrderDetails(req.params.orderId)
        let oldProductDetails = await userHelpers.oldProductDetails(req.params.orderId)
        console.log(orderDetails);
        console.log(oldProductDetails);
        res.render('users/orderSuccess', { headerDetails, orderDetails, oldProductDetails })
    },
    viewOrders: async (req, res) => {
        res.redirect('/account')
    },
    viewOrderDetails: async (req, res) => {
        //let productDetails = await userHelpers.orderProductDetails(req.params.id)
        const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
        let orderDetails = await userHelpers.getOrderDetails(req.params.id)
        let oldProductDetails = await userHelpers.oldProductDetails(req.params.id)
        oldProductDetails.forEach(cartDetails => {
            cartDetails.orderId = orderDetails._id
        })//added order id in to  the 'oldProductDetails' for accessing while on button click
        res.render('users/orderDetails', { orderDetails, oldProductDetails, headerDetails })
    },
    cancelOrder: (req, res) => {
        let Id = {}
        Id.proId = req.query.proId,
            Id.orderId = req.query.orderId
        userHelpers.cancelOrder(Id).then(() => {
            res.json(response)
        })
    },
    returnOrder: (req, res) => {
        let Id = {}
        Id.proId = req.query.proId,
            Id.orderId = req.query.orderId
        userHelpers.returnOrder(Id).then(() => {
            res.json(response)
        })
    },
    searchBar: async (req, res) => {
        let response = await productHelpers.getProductsBySearch(req.query.searchKey)
        res.json(response)
    }








}

      