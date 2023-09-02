<template>
    <div>
        <Nav/>
        <br/>
        <div v-if="$store.state.cart.cart.length == 0" class="text-center">
            <p>Belum ada barang di keranjang!</p>
        </div>
        <v-container>
            <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
                <v-btn nuxt to="/cart" min-width="150" min-height="45" depressed>Kembali</v-btn>
                <v-btn @click="proccess" min-width="150" min-height="45" color="primary">Konfirmasi</v-btn>
            </div>
            <v-form lazy-validation ref="form" class="mt-10">
                <p class="font-weight-bold">Personal & Delivery</p>
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="email"
                      :rules="[rules.required, rules.email]"
                      outlined
                      label="Email"
                      type="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="name"
                      :rules="[rules.required]"
                      outlined
                      label="Full Name"
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="phone"
                      outlined
                      label="Phone"
                      type="tel"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="address"
                      :rules="[rules.required]"
                      outlined
                      label="Address"
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="city"
                      :rules="[rules.required]"
                      outlined
                      label="City"
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="country"
                      :rules="[rules.required]"
                      outlined
                      label="Country"
                      type="text"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <p class="font-weight-bold">Credit card</p>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="cc"
                      :rules="[rules.required]"
                      outlined
                      label="Credit Card Number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="expdate"
                      :rules="[rules.required]"
                      outlined
                      label="Exp date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="cvv"
                      :rules="[rules.required]"
                      outlined
                      label="Security code/CVV"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
        </v-container>
    </div>
</template>

<script>
    export default {
      methods: {
        async proccess(){
          if(!this.$refs.form.validate()) return;

          await this.$swal({
            title: "Pesanan sedang diproses",
            icon: "info",
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 3000,
            timerProgressBar: true,
            text: "Harap Tunggu",
            showConfirmButton: false,
          });

          await this.$swal({
            title: "Pemesanan Selesai",
            icon: "success",
            allowEscapeKey: false,
            allowOutsideClick: false,
            timer: 4000,
            timerProgressBar: true,
            text: "Terima Kasih ❤",
            showConfirmButton: false,
          });

          //Kosongkan Cart
          this.$store.commit("cart/ClearCart");
          this.$router.push("/");

        },
      },

        data() {
            return {
                email: null,
                name: null,
                phone: null,
                address: null,
                city: null,
                country: null,
                cc: "424242424242",
                expdate: "06/15",
                cvv: "123",
                rules: {
                    required: (v) => !!v || 'Required',
                    email: (v) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(v) || "Invalid e-mail";
                    },
                },
            };
        },
    };
</script>

<style lang="scss" scoped>

</style>