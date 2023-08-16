const router = require('express').Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

// Authentication routes
router.post('/signup', authController.passwordCheck, authController.register);
router.post('/login', authController.login);
router.post('/forgot', authController.forgotPwd);
router.patch('/reset/:token', authController.passwordCheck, authController.resetPwd);

// Routes that can only be accessed when logged in
// router.use(authController.isAuthenticated);

router.get('/', userController.getAllUsers);
router.route('/:id', authController.restrictTo(['admin'])).get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;