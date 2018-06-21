let person = require('./person');
let axios = require('axios');


describe('All my person tests', ()=>{
    test('nancy is a millennial', ()=>{
        //arrange
        let nancy = new person(1984);
        //act
        let result = nancy.isMillennial();
        //assert
        expect(result).toBeTruthy();
    })

    test('Harold is a retiree', () => {
        // arrange
        let harold = new person(1908);
        // act
        let result = harold.isRetiree();
        // assert
        expect(result).toBeTruthy();
    })
})


test('async stuff', ()=>{
    expect.assertions(1) 
    return axios.get('https://joes-autos.herokuapp.com/api/vehicles?color=green').then(res=>{
        expect(res.data.length).toBe(3)
    })
})