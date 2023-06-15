const { Router } = require('express');
const ManagerRouter = Router();
const { handlerAllManager, handlerManagerCreate, handlerUpdateManager } = require('../handler/managerHandler')


ManagerRouter.get('/',handlerAllManager)
ManagerRouter.post('/', handlerManagerCreate)
ManagerRouter.put('/',handlerUpdateManager)
 
module.exports = ManagerRouter