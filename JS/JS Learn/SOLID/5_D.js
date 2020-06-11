// Dependency  inversion principle

class Fetch {
  request(url) {
    return Promise.resolve(`data from ${url}`)
  }
}

class LocalStorage {
  get(key) {
    const storage = {
      a: 'aaa',
      b: 'bbb',
      c: 'ccc'
    }
    return storage[key]
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }
  clientGet(url) {
    return this.fetch.request(url)
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }
  clientGet(key) {
    return this.localStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }
  getData(way) {
    return this.client.clientGet(way)
  }
}

const db1 = new Database(new LocalStorageClient())
const db2 = new Database(new FetchClient())
console.log(db1.getData('c'))
console.log(db2.getData('c.com'))