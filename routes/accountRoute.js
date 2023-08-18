const router = require('express').Router();
const accountController = require('../controllers/accountController');
const authController = require('../controllers/authController');

// Routes that can only be accessed when logged in
router.use(authController.isAuthenticated);
router.get('/me', accountController.getMyAccount);

router.use(authController.restrictTo(['admin']));

router.get('/', accountController.getAllAccounts);
router.route('/:id').get(accountController.getAccount).patch(accountController.updateAccount).delete(accountController.deleteAccount);

module.exports = router;