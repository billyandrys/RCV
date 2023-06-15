const { Router } = require('express');
const VaccinationRouter = Router();
const { handlerAllVaccination, handlerVaccinationCreate, handlerUpdateVaccination } = require('../handler/vaccinationHandler')


VaccinationRouter.get('/',handlerAllVaccination)
VaccinationRouter.post('/', handlerVaccinationCreate)
VaccinationRouter.put('/',handlerUpdateVaccination)
 
module.exports = VaccinationRouter