const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


router.get('/', UserController.getAllUsers);
router.get('/show-user/:id',UserController.getUserById)
router.get('/:id',UserController.getUserByIdWithAddress);
router.post('/', UserController.createUser);
router.put('/:id', UserController.userUpdate);
router.delete('/:id', UserController.deleteUser);

module.exports = router; 
