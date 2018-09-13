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
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          @click:append="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
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
      drawer: true
    }),
}
</script>

