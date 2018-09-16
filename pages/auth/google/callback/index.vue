<template>
    <pre>{{ this.$route.query }} --- {{ payload }}</pre>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        payload:{}
    }),
  	methods:{
  		callbackToBackend() {
              setTimeout(() => {
                  const url = 'http://localhost:3030/api/v1/auth/google/callback?' + 
                            "code=" + this.$route.query.code + 
                            "&scope="+ this.$route.query.scope + 
                            "&authuser=" + this.$route.query.authuser + 
                            "&session_state=" + this.$route.query.session_state + 
                            "&prompt=" + this.$route.query.prompt;
                    console.log("REDIRECTING to " + url);
                  axios.get(url)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        console.log('axios ok');
                        this.payload = response.data;
                    })
                    .catch(e => {
                        this.errors.push(e);
                        console.log('axios ok');
                    });
                //   this.$router.push({ path: '/api/v1/auth/google/callback', query: this.$route.query})
              }, 3000);
  	    }
  	},
  	created: function () {
  	},
  	mounted: function () {
  		this.callbackToBackend();
  	},
}
</script>

<style>

</style>
