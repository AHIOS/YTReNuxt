<template>
    <v-navigation-drawer
      v-model="isOpen"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="navTo(item.to)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="navTo(item)">
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" @click="navTo(item)">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="navTo(item)">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
      items: [
        { icon: 'trending_up', text: 'My recipes', to:'inspire' },
        { icon: 'subscriptions', text: 'Subscriptions', to:'/' },
        { icon: 'history', text: 'History', to:'inspire' },
        { icon: 'featured_play_list', text: 'Playlists', to:'/' },
        { icon: 'watch_later', text: 'Watch Later', to:'inspire' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }),
    methods: {
      navTo(dest){
        this.$router.push(dest);
      }
    },
    props:['isOpen'],
}
</script>

<style>

</style>
