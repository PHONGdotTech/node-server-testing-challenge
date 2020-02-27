const router = require("express").Router();

const employeesRouter = require('../employees/router')

router.use('/employees', employeesRouter)

module.exports = router;