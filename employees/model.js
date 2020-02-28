const db = require('../data/dbConfig')

module.exports = {
    findAll,
    findBy,
    addEmployee,
    deleteEmployee
}

function findAll(){
    return db(`employees`)
}

function findBy(filter){
    return db(`employees`).where(filter).first()
}

async function addEmployee(employee){
    const [createdID] = await db(`employees`).insert(employee, "id")
    return findBy({id: createdID})
}

function deleteEmployee(id){
    return db(`employees`).where({id: id}).delete()
}
