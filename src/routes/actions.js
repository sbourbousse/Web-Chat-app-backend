const express = require("express")
const router = express.Router()

const {userJoinChannel} = require('../controllers/actions');


router.post('/join', userJoinChannel);

module.exports = router