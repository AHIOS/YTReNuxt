import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'

const url = process.env._AXIOS_BASE_URL_;

const socket = io(url, {
    transports: ['websocket']
});

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth(
      { storage: new CookieStorage()}
    //   { storage: window.localStorage }
      ));

export default feathersClient;