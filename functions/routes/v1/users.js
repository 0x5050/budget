const express = require('express')
const router = express.Router()

const Users = require('../../controllers/v1/users')

router.get('/', Users.getAll)
router.post('/', Users.create)
router.put('/', Users.update)
router.delete('/', Users.remove)

module.exports = router