<template>
    <v-menu :nudge-width="100" v-if="user.googleId">
        <v-list-tile avatar slot="activator">
            <v-list-tile-avatar>
              <img :src="user.photoUrl" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="user.displayName"></v-list-tile-title>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-list-tile>
        <v-list>
          <v-list-tile @click="navTo('/settings')">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="navTo('/logout')">
            <v-list-tile-action>
              <v-icon>logout</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-items v-else>
      <v-btn flat :to="{ name: 'login' }">Login</v-btn>
    </v-toolbar-items>
</template>

<script>
export default {
    props: ['user'],
}
</script>