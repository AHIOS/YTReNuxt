import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../feathers-client'
const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })
Vue.use(Vuex)
Vue.use(FeathersVuex)

const createStore = () => {
    return new Vuex.Store({
            plugins: [
                service('users', {
                    instanceDefaults: {
                        email: '',
                        googleId: '',
                        displayName: '',
                        photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
                      }
                }),
                
                // Setup the auth plugin.
                auth({ userService: 'users' })
            ]
     });
}

  export default createStore;