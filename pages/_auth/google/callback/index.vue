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
        // proxyAuth() {
        //     const url = "http://localhost:3030/api/v1/auth/google/";
        //     axios.get(url)
        //     .then(response => {
        //         // JSON responses are automatically parsed.
        //         console.log('axios proxy ok');
        //         this.payload = !!response.data ? response.data : 'OK';
        //         // this.$router.push({ path: '/', query: this.$route.query})
        //     })
        //     .catch(e => {
        //         // this.errors.push(e);
        //         console.log('axios proxyKO: ' + e);
        //         this.payload = 'something went wrong';
        //         //this.$router.push({ path: '/', query: this.$route.query})
        //     });
        // },
  		callbackToBackend() {
            //   if(!!!this.$route.query){
            //       this.proxyAuth();
            //       return;
            //   }
              this.payload = this.$axios;
              return;
              console.log('baseURL ' + this.$axios.defaults.baseURL);
              console.log('browserBaseURL ' + this.$axios.browserBaseURL);
              console.log(axios.defaults.baseURL);
              console.log('ciao');
              console.log(process.env.baseURL);
            const url = "http://localhost:3030/api/v1/auth/google/callback/" + 
                    "?code=" + this.$route.query.code + 
                    "&scope="+ this.$route.query.scope + 
                    "&authuser=" + this.$route.query.authuser + 
                    "&session_state=" + this.$route.query.session_state + 
                    "&prompt=" + this.$route.query.prompt;
            axios.get(url)
            .then(response => {
                // JSON responses are automatically parsed.
                console.log('axios ok');
                this.payload = !!response.data ? response.data : 'OK';
                this.$router.push({ path: '/', query: this.$route.query})
            })
            .catch(e => {
                // this.errors.push(e);
                console.log('axios KO: ' + e);
                this.payload = 'something went wrong';
                //this.$router.push({ path: '/', query: this.$route.query})
            });
  	    }
  	},
  	created: function () {
  	},
  	mounted: function () {
  		// this.callbackToBackend();
  	},
}
</script>

<style>

</style>
