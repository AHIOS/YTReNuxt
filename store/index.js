import Vuex from 'vuex'
import feathersVuex,  { initAuth } from 'feathers-vuex'
import feathersClient from '../feathers-client'
const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })


const createStore = () => {
    console.log('creating store');
    return new Vuex.Store({
        state: {},
        mutations: {
          increment (state) {
            state.counter++
          }
        },
        actions: {
          nuxtServerInit ({ commit, dispatch }, { req }) {
              console.log('nuxt server init')
              console.log('req ' + req)
            return initAuth({
              commit,
              dispatch,
              req,
              moduleName: 'auth',
              cookieName: 'feathers-jwt'
            })
          }
        },
        plugins: [
            service('users', {
                instanceDefaults: {
                    email: '',
                    googleId: '',
                    displayName: '',
                    photoUrl: ''
                    }
            }),
            
            // Setup the auth plugin.
            auth({
                state: {
                    publicPages: [
                      'login'
                    ]
                }, 
                userService: 'users'
            })
        ]
     });
}

  export default createStore;