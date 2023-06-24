const { Router } = require('express')
const { createUser, updateStatus, allUsers } = require('../handlers/User')
const router = Router()
router.post('/', createUser)
router.put('/updatestatus', updateStatus)
router.get('/alluser', allUsers)

module.exports = router