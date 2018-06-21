let Tick = require('./Tick');


test('tick',() => {
    let timer = new Tick()
    let initialValue = timer.checkTimer()
    timer.tick()
    let result = timer.checkTimer()

    expect(result).toBe(initialValue + 1)

})


