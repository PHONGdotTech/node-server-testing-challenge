const request = require('supertest')
const server = require('../api/server')
const db = require('../data/dbConfig')

describe('employees router', ()=>{
    it('should run the tests', function(){
        expect(true).toBe(true)
    })

    describe('GET /api/employees', () => {
        it('should return 200 OK', () => {
            return request(server).get('/api/employees').then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return array', function(){
            return request(server).get('/api/employees').then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            })
        })
    })

    describe('POST /api/employees', () => {
        it('should return 201 created', async () => {
            await db('employees').truncate();
            await request(server).post('/api/employees')
                .send({fname: "John", lname: "Doe", username: "jdoee", password: "johndoe"})
                .then(res =>{
                    expect(res.status).toBe(201)
                })
        })

        it('should return json', async () =>{
            await db('employees').truncate();
            await request(server).post('/api/employees')
                .send({fname: "John", lname: "Doe", username: "jdoeee1", password: "johndoe"})
                .then(res =>{
                    expect(res.body).toEqual(expect.objectContaining({
                        id: 1,
                        fname: "John",
                        lname: "Doe",
                        username: "jdoeee1"
                    }))
                })
        })
    })

    describe('DELETE /api/employees', () => {
        it('should delete and return 200 and success message', async ()=>{
            await db('employees').truncate();

            await request(server).post('/api/employees')
                .send({fname: "John", lname: "Doe", username: "jdoee", password: "johndoe"})
                .then(async res =>{
                    await request(server).delete('/api/employees')
                    .send({id: 1})
                    .then(res => {
                        console.log(`message: ${res.body.message} \n status: ${res.status}`)
                        expect(res.status).toBe(200);
                        expect(res.body.message).toBe('Successfully deleted 1 employee.')
                    })
                })

            
        })
    })
})