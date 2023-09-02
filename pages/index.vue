<template>
  <div>
    <Nav/>
    <br/><br/>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card rounded="lg" class="mx-auto"
          max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('../assets/img/products.jpg')"
            >
              <v-card-title class="text-h5 font-weight-bold">
                PRODUCTS: {{ productCount }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card rounded="lg" class="mx-auto"
          max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('../assets/img/offers.jpg')"
            >
              <v-card-title class="text-h5 font-weight-bold">
                OFFERS: {{ offerCount }}
              </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>
    <ScrollTop/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    async asyncData(){
      const {data: products} = await axios.get('http://localhost:8000/api/products')
      const {data: offers} = await axios.get('http://localhost:8000/api/sells')
      return {
        products: products,
        offers: offers,
      }
    },
    computed:{
      productCount (){
        return this.products.length
      },
      offerCount (){
        return this.offers.length
      }
    }
  }
    // async created() {
    //     this.sale_items = await axios.get('http://localhost:8000/api/products').where({ hotItems: true })
    //     this.products = await axios.get('http://localhost:8000/api/products')
    // },
    // data() {
    //     return {
    //         products: null,
    //         sale_items: null
    //     };
    // }
    // async asyncData({ $axios }) {
    //   let { data } = await $axios.get("/products");
    //   return { products: data};
    // }
</script>

<style>
  
</style>