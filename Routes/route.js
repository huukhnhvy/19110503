const express = require("express");
const Controller = require('../Controllers/controller')
const router = express.Router()

router.get('/', Controller.GetAll)
router.get('/19110503/:id', Controller.GetOne)
router.post('/19110503/:id', Controller.Create)
router.get('/message', Controller.GetAllMessage)
router.get('/message/:id', Controller.GetMessage)

module.exports = router;
