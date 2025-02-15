const express = require('express');
// const multer = require('multer');
const router = express.Router();

const userController = require('../controllers/userController');


// image upload
// var storage = multer.diskStorage({
//     destination: function(req, res, cb){
//         cb(null, './uploads');
//     },
//     filename: function(req, file,cb){
//         cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
//     }
// })

// var upload = multer({
//     storage: storage,
// }).single("image");



router.get('/dashboard',userController.dashboardPage);

router.get('/accounthistory/:id',userController.accounHistoryPage);

router.get('/transferHistory/:id',userController.transferHistoryPage);
router.get('/localtransfer',userController.localtransferPage);
router.post('/localtransfer/:id',userController.localtransferPage_post);

router.get('/account-settings',userController.accountPage);
router.post('/account-settings/:id',userController.accountPage_post);



router.get('/buy-plan',userController.buyPlanPage);
router.post('/buy-plan/:id',userController.buyPlanPage_post);

router.get('/myplans/:id',userController.myPlanPage);
router.get('/kyc-form',userController.kycPage);
router.get('/verify-account',userController.verifyPage);
router.post('/verify-account/:id',userController.verifyPage_post);

router.get('/support',userController.supportPage);
router.post("/support/:id", userController.supportPage_post)

// router.get('/payment/:id',userController.paymentPage);
// 

router.get('/bit-pay',userController.bitPayPage);
router.get('/bank-pay',userController.baPayPage);
router.get('/deposits', userController.depositPage);
router.post('/deposit/:id', userController.depositPage_post);


router.get('/internationaltransfer',userController.internationaltransferPage);
router.post('/internationaltransfer/:id',userController.internationaltransferPage_post);
router.get('/card',userController.cardPage);
router.get('/loan',userController.loanPage);
router.post('/loan/:id',userController.loanPage_post);
router.get('/viewloan/:id',userController.viewloanPage);



router.get('/withdrawals',userController.widthdrawPage);
router.post('/widthdraw/:id',userController.widthdrawPage_post);
router.get('/withdrawal-history/:id',userController.widthdrawHistory);


// router.get('/buyCrypto', userController.buyCrypto)

module.exports = router;

