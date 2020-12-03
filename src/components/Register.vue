<template>
<v-container>
  Rgister Page
  <br>
  <input
  type="email"
  name="email"
  placeholder="email"
  v-model="email"
  >
  <br>

  <input
   type="password"
   name="password"
   placeholder="password"
   v-model="password"
  >
  <button @click="register()">Register</button>

</v-container>


</template>

<script>
import AuthenticationService from '../services/AuthenticationService.js'
  export default {
    name: 'Register',

    data: () => ({
      email:"",
      password:""

    }),
    methods:{
     async register(){
       const res= await AuthenticationService.register({
          email:this.email,
          password:this.password
        })
        console.log(res.data)

      }
    }
  }
</script>
