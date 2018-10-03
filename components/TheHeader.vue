<template>
<div>
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer;"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">YTReNuxt</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <user-avatar :user="user"></user-avatar>
    </v-toolbar>
    <the-drawer 
        :isOpen="this.drawer"
    ></the-drawer>
</div>
    
</template>

<script>
import TheDrawer from '@/components/TheDrawer';
import UserAvatar from '@/components/UserAvatar';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
      TheDrawer,
      UserAvatar
    },
    data: () => ({
      drawer: true,
      user: {
        email: '',
        googleId: '',
        displayName: 'Name Surname',
        photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      items:[
        'logout',
        'profile'
      ]
    }),
    methods: {
      ...mapActions('auth', ['authenticate', 'logout'])
    },
    computed: {
      logged () {
        return this.$store.state.auth.user
      }
    },
    created: function () {
      console.log('created header');
      const {User} = this.$FeathersVuex;
      const user = new User(this.user);
      console.log(user);
      console.log('is logged ' + this.logged);
      this.authenticate(
        'jwt'
      ).catch(() => {
        console.log(this.$store.state.auth.errorOnAuthenticate.message)
      })
    },
    mounted: function () {
      console.log('mounted header');
    }
}
</script>

