const router = require("express").Router();
const Employees = require('./model')

router.get('/', (req,res)=>{
    Employees.findAll()
    .then(employees => {
        res.status(200).json(employees)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({name, message, stack, code})
    })
})

router.post('/', (req,res) =>{
    Employees.addEmployee(req.body)
    .then(employee => {
        res.status(201).json(employee)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({name, message, stack, code})
    })
})

router.get('/:id', (req,res) =>{
    Employees.findBy({id: req.params.id})
    .then(employee => {
        res.status(200).json(employee)
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({name, message, stack, code})
    })
})

router.delete('/', (req,res)=>{
    Employees.deleteEmployee(req.body.id)
    .then(del => {
        res.status(200).json({message:`Successfully deleted ${del} employee.`})
    })
    .catch(({name, message, stack, code}) => {
        res.status(500).json({name, message, stack, code})
    })
})

module.exports = router;