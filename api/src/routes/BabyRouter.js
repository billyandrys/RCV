const { Router } = require('express');
const BabyRouter = Router();
//const { handleDogsAll, handleDogById, handleDogCreate } = require('../handlers/dogHandler')

function rutasBaby() {
    return 'pepe'
}

BabyRouter.get('/',rutasBaby)
/* BebesRouter.get('/:idRaza', handleDogById) */
/* BebesRouter.post('/', handleDogCreate) */
 
module.exports = BabyRouter