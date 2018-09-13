<template>
  <v-app
    id="inspire"
    dark
  >
    <the-header></the-header>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from '@/components/TheHeader';
  export default {
    components: {
      TheHeader
    },
    props: {
      source: String
    }
  }
</script>
