import { CookieStorage } from 'cookie-storage'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

export const host = process.env.BE_URL || 'http://localhost:3030'
console.log('wsHost: ' + host)

const socket = io(host, {
    transports: ['websocket']
  })

  const feathersClient = feathers()
    .configure(socketio(socket))
    .configure(auth({ storage: new CookieStorage() }))

export default feathersClient
