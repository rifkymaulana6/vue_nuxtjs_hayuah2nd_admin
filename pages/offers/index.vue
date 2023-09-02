<template>
    <div>
        <Nav/>
        <v-container>
            <!-- <v-row dense>
                <v-col md="6"> -->
                    <v-row>
                        <template v-for="(o,i) in filterOffers">
                            <v-col cols="12" md="3" :key="`sell${o.id}-${i}`">
                                <v-card nuxt :to="`/offers/`+o.id" color="surface" class="el ma-2 mb-5 mr-5" height="100%">
                                    <v-img :src="o.image" height="300">
                                        <template #placeholder>
                                            <v-row class="fill-height" justify="center" align="center">
                                                <v-progress-circular width="2" size="100" color="primary" indeterminate>
                                                </v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                    <v-card-title class="text-md-body-1 font-weight-bold">
                                        {{o.name}}
                                    </v-card-title>
                                    <v-card-text class="pb-0">
                                        <div>Brand: {{o.brand}}</div>
                                    </v-card-text>
                                    <v-card-subtitle class="primary--text pb-3">
                                        {{$formatMoney(o.price)}}
                                    </v-card-subtitle>
                                </v-card>
                            </v-col>
                        </template>
                    </v-row>
                <!-- </v-col>
            </v-row> -->
        </v-container>
        <Footer/>
        <ScrollTop/>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        async asyncData() {
            const {data: offers} = await axios.get('http://localhost:8000/api/sells')
            return {
                offers: offers,
                search: null
            }
        },
        // async created() {
        //     this.categories = await this.$content("category").fetch();
        //     this.products = await this.$content("products").fetch();
        // },
        // data() {
        //     return {
        //         products: null,
        //         categories: null,
        //         search: null,
        //     };
        // },
        computed:{
            filterOffers(){
                if(!this.search || !this.offers) return this.offers || {};
                return this.offers.filter(o =>{
                    const s = this.search.toLowerCase();
                    const n = o.name.toLowerCase();
                    const price = o.price.toString()

                    return n.includes(s) || price.includes(s)
                })
            }
        }
    }
</script>

<style>

</style>