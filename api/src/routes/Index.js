const { Router } = require('express');
const Express = require('express')
const morgan = require('morgan')
const babyRouter = require('./BabyRouter')
/* const epsRouter = require('./EpsRouter') */
/* const ipsRouter = require('./IpsRouter') */
const managerRouter = require('./ManagerRouter')
/* const vacunacionRouter = require('./VacunacionRouter') */
/* const usuariosRouter = require('./UsuariosRouter')*/

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(Express.json())
router.use(morgan('dev'))

router.use('/baby', babyRouter);
/* router.use('/eps', epsRouter); */
/* router.use('/ips', ipsRouter); */
router.use('/manager', managerRouter);
/* router.use('/vaccination', vaccinationRouter); */
/* router.use('/users', userssRouter) */
module.exports = router;