const { Router } = require('express');
const BulkCreateRouter = Router();
const createInstances = require('../dataInitial/cargarDatos');

BulkCreateRouter.post('/', createInstances)

module.exports = BulkCreateRouter