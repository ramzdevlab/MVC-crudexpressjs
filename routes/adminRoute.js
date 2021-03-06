const express = require('express')
const routes =  express.Router()
const adminController = require('../controller/adminController')
routes.get('/', adminController.index)
routes.post('/', adminController.login)
routes.get('/dashboard', adminController.dashboard)
routes.get('/tambah', adminController.tambah)
routes.post('/dashboard', adminController.insert)
routes.get('/logout', adminController.logout)
routes.get('/perbaharui/:id', adminController.edit)
routes.put('/dashboard/:id', adminController.update)
routes.delete('/dashboard/:id', adminController.delete)
module.exports = routes