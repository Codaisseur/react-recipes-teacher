// src/middleware/api.js
import feathers from 'feathers-client'
import rest from 'feathers-rest/client'
import superagent from 'superagent'

const host = 'http://localhost:3030'

class API {
  constructor() {
    this.app = feathers()
      .configure(feathers.hooks())
      .configure(feathers.authentication({
        type: 'local',
        // when logged in, store the token in localStorage
        storage: window.localStorage,
      }))
      .configure(rest(host).superagent(superagent));
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    const { email, password } = user
    return this.app.authenticate(
      Object.assign({}, { type: 'local' }, {
      email,
      password,
    }))
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
