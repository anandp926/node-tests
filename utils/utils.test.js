const utils = require('./utils')
const expect = require('expect')


describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
        
            expect(res).toBe(44)
            expect(typeof res).toBe('number')
        
            // if(res !== 44){
            //     throw new Error(`Expected 44, but got ${res}`)
            // }
        })

        it('should async add to number', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7)
                done();
            })
        })
    })

    it('should square of two numbers', () => {
        var res = utils.square(3);
    
        expect(res).toBe(9)
        expect(typeof res).toBe('number')
        // if(res !== 25){
        //     throw new Error(`Expected 25, but got ${res}`)
        // }
    })
    
})


it('should expect some value', () => {
    expect(12).toEqual(12)
})