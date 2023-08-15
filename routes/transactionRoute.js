const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');

// Routes that can only be accessed when logged in
router.use(authController.isAuthenticated);
router.get('/me', transactionController.getMyTransactions);
router.post('/withdraw', transactionController.withdraw);
router.post('/deposit', transactionController.deposit);

router.use(authController.restrictTo(['admin']));

router.get('/', transactionController.getAllTransactions);
router.route('/:id').get(transactionController.getUser).patch(transactionController.updateUser).delete(transactionController.deleteUser);

module.exports = router;