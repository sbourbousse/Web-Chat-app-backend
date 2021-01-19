const express = require("express");
const router = express.Router()

const {getUser, createUser, deleteUser, getSingleUser, getUserByNickname} = require('../controllers/users');


router.get('/', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.get('/:id', getSingleUser);
router.get('/find/:nickname', getUserByNickname);


module.exports = router