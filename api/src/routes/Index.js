const { Router } = require('express');
const Express = require('express')
const morgan = require('morgan')
const babyRouter = require('./BabyRouter')
<<<<<<< HEAD
const epsRouter = require('./EpsRouter')
const ipsRouter = require('./IpsRouter') 
const userRouter = require('./UsersRouter')
/* const responsableRouter = require('./ResponsableRouter') */
/* const vacunacionRouter = require('./VacunacionRouter') */
=======
/* const epsRouter = require('./EpsRouter') */
/* const ipsRouter = require('./IpsRouter') */
const managerRouter = require('./ManagerRouter')
const vaccinationRouter = require('./VaccinationRouter')
>>>>>>> 99781b5bbdc03c2fa3e56dff7f0045725da84c44
/* const usuariosRouter = require('./UsuariosRouter')*/
const createInstances = require('../dataInitial/cargarDatos')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(Express.json())
router.use(morgan('dev'))

router.use('/baby', babyRouter);
<<<<<<< HEAD
router.use('/eps', epsRouter); 
 router.use('/ips', ipsRouter);
 router.use('/user', userRouter)
 
/* router.use('/padres', responsableRouter); */
/* router.use('/vacunacion', vacunacionRouter); */
/* router.use('/usuarios', usuariosRouter) */
=======
/* router.use('/eps', epsRouter); */
/* router.use('/ips', ipsRouter); */
router.use('/manager', managerRouter);
router.use('/vaccination', vaccinationRouter);
/* router.use('/users', userssRouter) */
<<<<<<< HEAD
>>>>>>> 99781b5bbdc03c2fa3e56dff7f0045725da84c44
=======
router.use('',createInstances)
>>>>>>> c39d0aea37ed12351130aaeaeb2024366bb47411
module.exports = router;