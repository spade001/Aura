
var express = require('express');
const userHelpers = require('../helpers/user-helpers');
var router = express.Router();
const { uploadSingleFile, uploadMultiple, uploadTwoBanner,uploadCover } = require('../middlewares/multer');
const { verifyAdmin } = require('../middlewares/verification');
const {
  dashboard, adminLogin, getDashBoard, viewUsers, blockUser, unBlockUser, signOut, viewProductCategory, getAddCategoryPage,
  addCategory, getEditCategory, updateCategory, getDeleteCategory, viewProducts, getAddProducts, categoryViseDiscount,
  addNewProduct, getEditProducts, updateProduct, deleteProduct, viewOrderDetails, viewAllOrders, changeDeliveryStatus,
  viewSalesReport, salesReportByDate, viewOfferManagementPage, viewCouponManagementPage, addNewCoupon, updateCoupon, deleteCoupon,
  applyCouponDiscount, getTopBanner, getAddBannerPage, addNewBanner, getEditBannerPage, updateTopBanner, deleteTopBanner, viewAdminProfile,addCoverImg, getCoverPage, addNewCover
} = require('../controllers/adminControllers');


//Login Routes
router.get('/', verifyAdmin, dashboard);
router.post('/dash', adminLogin)
router.get('/dash', verifyAdmin, getDashBoard);
router.get('/view-users', verifyAdmin, viewUsers)
router.get('/block/:id', verifyAdmin, blockUser)
router.get('/unBlock/:id', verifyAdmin, unBlockUser)
router.get('/signOut', verifyAdmin, signOut)

//Product Category Routes
router.get('/product-category', verifyAdmin, viewProductCategory)
router.get('/add-category', verifyAdmin, getAddCategoryPage)
router.post('/addNewCategory', verifyAdmin, uploadSingleFile, addCategory)
router.get('/edit-category/:id', getEditCategory)
router.post('/update-category/:id', uploadSingleFile, updateCategory)
router.get('/delete-category/:id', verifyAdmin, getDeleteCategory)

//Product Routes
router.get('/view-products', verifyAdmin, viewProducts)
router.get('/add-product', verifyAdmin, getAddProducts)
router.get('/getCategoryDiscount', verifyAdmin, categoryViseDiscount) //to show in add product dropdown
router.post('/add-products', uploadMultiple, addNewProduct)
router.get('/edit-product/:id', verifyAdmin, getEditProducts)
router.post('/update-product/:id', uploadMultiple, updateProduct)
router.get('/delete-product/:id', verifyAdmin, deleteProduct)
router.get('/viewOrders', verifyAdmin, viewAllOrders)
router.get('/viewOrdersDetails/:id', verifyAdmin, viewOrderDetails)
router.post('/changeDeliveryStatus', verifyAdmin, changeDeliveryStatus)
router.get('/view_Sales_Report', verifyAdmin, viewSalesReport)
router.post('/searchByDate', verifyAdmin, salesReportByDate)


//Profile Routes 
router.get('/profile', verifyAdmin, viewAdminProfile)

//Offer And Coupon Management Routes 
router.get('/offerManagement', verifyAdmin, viewOfferManagementPage)

router.get('/CouponManagements', verifyAdmin, viewCouponManagementPage)
router.post('/addCoupon', verifyAdmin, addNewCoupon)
router.post('/updateCoupon', verifyAdmin, updateCoupon)
router.post('/deleteCoupon', verifyAdmin, deleteCoupon)
router.post('/getCouponDiscount/:couponCode', verifyAdmin, applyCouponDiscount)

//TopBanner Routes 
router.get('/coverimage',verifyAdmin,getCoverPage)
router.get('/addCover',verifyAdmin,addCoverImg)
router.post('/add-cover',uploadCover,addNewCover)
router.get('/topBanner',verifyAdmin, getTopBanner)
router.get('/addBanner',verifyAdmin, getAddBannerPage)
router.post('/add-banner',uploadTwoBanner, addNewBanner)
router.get('/edit-TopBanner/:id',verifyAdmin, getEditBannerPage)
router.post('/update-TopBanner/:id', uploadTwoBanner, updateTopBanner)
router.get('/delete-TopBanner/:id', verifyAdmin, deleteTopBanner)



module.exports = router;
















// const { request, response } = require('express');
// const { ProfilingLevel } = require('mongodb');
// const userHelper = require('../helpers/user-helpers')
// const productHelpers = require('../helpers/product-helpers');
// const categoryHelpers = require('../helpers/category-helpers');
// const adminHelpers = require('../helpers/admin-helpers');


// router.post('/removeProduct', (req, res, next) => {
//   userHelpers.removeProduct(req.body).then(async (response) => {
//     const headerDetails = await userHelpers.getHeaderDetails(req.session.user._id)
//     // response.total = await userHelpers.getTotalAmount(req.body.user)
//     res.json(response)
//   })
// })