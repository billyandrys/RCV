const { Router } = require('express')
const { createEps, updateEps, allEps, updateStatus } = require('../handlers/Eps')
const router = Router()

router.put('/updateeps', updateEps)
router.get('/alleps', allEps)
router.post('/', createEps)
router.put('/deleteeps', updateStatus)


module.exports = router


