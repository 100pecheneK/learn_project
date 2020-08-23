const MishaPromise = require('./promise')


describe('Misha Promise: ', () => {

  let promise, executor
  const successResult = 15
  const errorResult = 'I am error!!!'

  beforeEach(() => {
    executor = jest.fn(
      (resolve, reject) => setTimeout(() => resolve(successResult), 150)
    )
    promise = new MishaPromise(executor)
  })

  test('Should exists and to be typeof function', () => {
    expect(MishaPromise).toBeDefined()
    expect(typeof MishaPromise).toBe('function')
  })

  test('Instance should have method: then, catch, finally', () => {
    expect(promise.then).toBeDefined()
    expect(promise.catch).toBeDefined()
    expect(promise.finally).toBeDefined()
  })

  test('Should call executor function', () => {
    expect(executor).toHaveBeenCalled()
  })

  test('Should get data in then block and chain them', async () => {
    const res = await promise.then(data => data).then(data => data * 2)
    expect(res).toBe(successResult * 2)
  })

  test('Should catch error', () => {
    const errorExecutor = (_, reject) => setTimeout(() => reject(errorResult), 150)
    const errorPromise = new MishaPromise(errorExecutor)

    return new Promise(resolve => {
      errorPromise.catch(err => {
        expect(err).toBe(errorResult)
        resolve()
      })
    })
  })

  test('Should call finally method', async () => {
    const finallySpy = jest.fn(() => {})
    await promise.finally(finallySpy)
    expect(finallySpy).toHaveBeenCalled()
  })
})