const express = require("express")
const router = express.Router()

const {getChannel, createChannel, deleteChannel, getSingleChannel, getChannelByChannelName} = require('../controllers/channels');


router.get('/', getChannel);
router.post('/', createChannel);
router.delete('/:id', deleteChannel);
router.get('/:id', getSingleChannel);
router.get('/find/:channelName', getChannelByChannelName);

module.exports = router