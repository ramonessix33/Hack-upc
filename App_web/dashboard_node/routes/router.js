const express = require('express')
const {vistaPrincipal, vistasTables, vistasNotifications} = require('../controllers/PageControllers')
const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/tables', vistasTables)
router.get('/notifications', vistasNotifications)

module.exports = {routes: router}

