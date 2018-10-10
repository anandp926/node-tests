const request = require('supertest');
const expect = require('expect')

var app = require('./server').app

describe('Server', () => {

    describe('Get /', () => {
        it('should return Hello world response', (done) => {
            request(app)
                .get('/')
                .expect(400)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'page not found'
                    })
                })
                .end(done)
        })
    })

    describe('Get /users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Anand',
                        age: 20
                    })
                })
                .end(done)
        })
    })

    
})



