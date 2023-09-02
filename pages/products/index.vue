<template>
    <div>
        <Nav/>
        <v-container>
            <v-btn href="/products/add" min-height="45" min-width="170" class="text-capitalize mb-5 mt-4" color="primary">
                Add Product
            </v-btn>
            <!-- <v-row dense> -->
                <!-- <v-col md="6"> -->
                    <v-row>
                        <template v-for="(p,i) in filterProducts">
                            <v-col cols="12" md="3" :key="`product${p.id}-${i}`">
                                <v-card nuxt :to="`/products/`+p.id" color="surface" class="el ma-2 mb-5 mr-5" height="100%">
                                    <v-img :src="p.image" height="300">
                                        <template #placeholder>
                                            <v-row class="fill-height" justify="center" align="center">
                                                <v-progress-circular width="2" size="100" color="primary" indeterminate>
                                                </v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                    <v-card-title class="text-md-body-1 font-weight-bold">
                                        {{p.title}}
                                    </v-card-title>
                                    <v-card-subtitle class="primary--text pb-3">
                                        {{$formatMoney(p.price)}}
                                    </v-card-subtitle>
                                    <v-card-text class="pb-0">
                                        <div>Stock {{p.stock}}</div>
                                    </v-card-text>
                                    <v-card-text>
                                        <v-chip x-small label outlined class="mr-1">
                                            {{p.category}}
                                        </v-chip>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </template>
                    </v-row>
                <!-- </v-col> -->

            <!-- </v-row> -->
        </v-container>
        <Footer/>
        <ScrollTop/>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        async asyncData() {
            const {data: products} = await axios.get('http://localhost:8000/api/products')
            const {data: categories} = await axios.get('http://localhost:8000/api/categories')
            return {
                products: products,
                categories: categories,
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
            filterProducts(){
                if(!this.search || !this.products) return this.products || {};
                return this.products.filter(p =>{
                    const s = this.search.toLowerCase();
                    const n = p.title.toLowerCase();
                    const price = p.price.toString()

                    return n.includes(s) || price.includes(s)
                })
            }
        }
    }
</script>

<style>

</style>