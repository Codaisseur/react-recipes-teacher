// src/middleware/api.js
import feathers from 'feathers-client'
import io from 'socket.io-client';

const host = 'http://localhost:3030'

class API {
  constructor() {
    const socket = io(host);
    this.app = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks())
      .configure(feathers.authentication({
        type: 'local',
        // when logged in, store the token in localStorage
        storage: window.localStorage,
      }));
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
