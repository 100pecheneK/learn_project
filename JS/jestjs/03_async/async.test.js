const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {
  test('Should return value async', async () => {
    const res = await Ajax.echo('some data')
    expect(res).toBe('some data')
  })
  test('Should return value with promise', () => {
    return Ajax.echo('some data').then(data => {
      expect(data).toBe('some data')
    })
  })

  test('Should catch error with async', async () => {
    try {
      await Ajax.echo()
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
    }
  })
  test('Should catch error with promise', () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error)
    })
  })
})

describe('Ajax: get', () => {
  let res
  let todos
  beforeEach(() => {
    todos = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      }
    ]
    res = {
      data: todos
    }
  })
  test('Should return data from backend', async () => {
    axios.get.mockReturnValue(res)

    const data = await Ajax.get()
    expect(data).toEqual(todos)
  })
})