const { Router } = require('express');
const BabyRouter = Router();
const { handlerAllBaby, handlerBabyCreate, handlerUpdateBaby } = require('../handler/babyHandler')


BabyRouter.get('/',handlerAllBaby)
BabyRouter.post('/', handlerBabyCreate)
BabyRouter.put('/',handlerUpdateBaby)
 
module.exports = BabyRouter