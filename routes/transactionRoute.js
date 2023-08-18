const router = require('express').Router();
const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');

// Routes that can only be accessed when logged in
router.use(authController.isAuthenticated);
router.get('/me', transactionController.getMyTransactions);
router.post('/', transactionController.createTransaction);

router.use(authController.restrictTo(['admin']));

router.get('/', transactionController.getAllTransactions);
router.route('/:id').get(transactionController.getTransaction).patch(transactionController.updateTransaction).delete(transactionController.deleteTransaction);

module.exports = router;