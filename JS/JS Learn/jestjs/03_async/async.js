const axios = require('axios')

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data)
        } else {
          reject(new Error('Error echo'))
        }
      }, 150)
    })
  }

  static async get() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      return res.data
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = Ajax