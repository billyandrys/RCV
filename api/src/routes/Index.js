const { Router } = require('express');
const Express = require('express')
const morgan = require('morgan')
const babyRouter = require('./BabyRouter')
const epsRouter = require('./EpsRouter')
const ipsRouter = require('./IpsRouter') 
const userRouter = require('./UsersRouter')
const managerRouter = require('./ManagerRouter')
const vaccinationRouter = require('./VaccinationRouter')
const createInstances = require('../dataInitial/cargarDatos')
const router = Router();

router.use(Express.json())
router.use(morgan('dev'))

router.use('/baby', babyRouter);
router.use('/eps', epsRouter); 
router.use('/ips', ipsRouter);
router.use('/user', userRouter)
router.use('/manager', managerRouter);
router.use('/vaccination', vaccinationRouter);

router.use('',createInstances)

module.exports = router;