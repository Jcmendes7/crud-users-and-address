const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


router.get('/', UserController.getAllUsers);
router.get('/:id',UserController.getUserById)
router.get('/address/:id',UserController.getUserByIdWithAddress);
router.post('/create', UserController.createUser);
router.put('/update/:id', UserController.userUpdate);
router.delete('/delete/:id', UserController.deleteUser);

module.exports = router; 
