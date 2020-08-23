function noop() {}

class MishaPromise {
  constructor(executor) {
    this._queue = []
    this._errorHandler = noop
    this._fynallyHandler = noop

    try {
      executor.call(null, this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this._errorHandler(e)
    } finally {
      this._fynallyHandler()
    }
  }

  resolve(data) {
    this._queue.forEach(cb => {
      data = cb(data)
    })
    this._fynallyHandler()
  }

  reject(error) {
    this._errorHandler(error)
    this._fynallyHandler()
  }

  then(fn) {
    this._queue.push(fn)
    return this
  }

  catch(fn) {
    this._errorHandler = fn
    return this
  }

  finally(fn) {
    this._fynallyHandler = fn
    return this
  }
}

const promise = new MishaPromise((res, rej) => setTimeout(() => res('Hello!'), 100))
promise
  .then(data => data.toUpperCase())
  .then(console.log)
  .catch(e => console.log('Error: ', e))
  .finally(() => console.log('Finally'))


module.exports = MishaPromise