const { Router } = require('express')
const { createIps, allIps, updateIps, updateStatus }  = require('../handlers/Ips')

const router =  Router()

router.post('/', createIps)
router.get('/all/:id', allIps)
router.get('/all/', allIps)
router.put('/update', updateIps )
router.put('/status', updateStatus)
router.put('deletestatus', updateStatus)

module.exports = router