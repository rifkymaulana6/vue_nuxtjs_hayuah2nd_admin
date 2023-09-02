<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Signup form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-snackbar
                           v-model="snackbar"
                        >
                           {{ error }}
                           <template v-slot:action="{ attrs }">
                           <v-btn
                              color="pink"
                              text
                              v-bind="attrs"
                              @click="snackbar = false"
                           >
                              Close
                           </v-btn>
                           </template>
                        </v-snackbar>
                        <v-form>
                           <v-text-field
                              name="name"
                              label="Name"
                              type="text"
                              v-model="name"
                           ></v-text-field>
                           <!-- <v-text-field
                              name="lastname"
                              label="Lastname"
                              type="text"
                              v-model="lastName"
                           ></v-text-field> -->
                           <v-text-field
                              name="email"
                              label="Email"
                              type="text"
                              v-model="email"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                           <v-text-field
                              id="confPassword"
                              name="confPassword"
                              label="Confirm Password"
                              type="password"
                              v-model="confPassword"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="signupHandler">Signup</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>

export default {
   name: 'Signup',
   data() {
      return {
         name: null,
         email: null,
         password: null,
         confPassword: null,
         error: null,
         snackbar: false
      }
   },
   methods: {
      async signupHandler() {
         const data = {
            'name': this.name,
            'email': this.email,
            'password': this.password,
            'confPassword': this.confPassword
         }
         try {
            const res = await this.$axios.post('/customers', data)
            this.$router.push('/login')
         }
         catch(e) {
            this.error = e.response.data.message
            this.snackbar = true
         }
      }
   }
};
</script>

<style></style>