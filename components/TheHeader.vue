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
      <v-menu :nudge-width="100">
        <v-list-tile avatar slot="activator">
            <v-list-tile-avatar>
              <img :src="`${user.photoUrl}`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="user.displayName"></v-list-tile-title>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-list-tile>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <the-drawer 
        :isOpen="this.drawer"
    ></the-drawer>
</div>
    
</template>

<script>
import TheDrawer from '@/components/TheDrawer';
export default {
    components: {
      TheDrawer
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
    methods:{
      created: function () {
        const {user} = this.$FeathersVuex;
        console.log(user);
      }
    },
}
</script>

