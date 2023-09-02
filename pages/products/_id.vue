<template>
    <div>
        <Nav/>
        <v-container v-if="product">
            <v-row justify="center">
                <v-col cols="11" md="7">
                    <h2 class="text-center text-md-h4 font-weight-bold">
                        {{product.title}}
                    </h2>
                    <!-- <div class="text-center mt-2">
                        <v-rating readonly half-increments class="mb-2" color="yellow darken-2" background-color="gray lighten-1" :value="product.ratings" dense size="20"></v-rating>
                        <v-chip x-small label outlined class="mr-1" v-for="(t, i) in product.tags" :key="`prod${product.id}-${i}`">
                            {{ t }}
                        </v-chip>
                    </div> -->
                    <br/>
                    <v-img width="100%" class="el rounded-lg" height="50vh" :src="product.image"></v-img>
                    <p class="mt-5 mb-7">
                        {{ product.full_description }}
                    </p>
                    <v-btn nuxt :to="`/update/`+product.id" min-height="45" min-width="170" class="text-capitalize" color="primary">
                        Edit
                    </v-btn>
                    <v-btn @click="deleteHandler" min-height="45" min-width="170" class="text-capitalize" color="error">
                        Delete
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <br/><br/>
        <Footer/>
        <ScrollTop/>
    </div>
</template>

<script>
import axios from 'axios';
import 'sweetalert2/dist/sweetalert2.min.css';
export default {
    async asyncData ({params}) {
        const { data } = await axios.get(`http://localhost:8000/api/products/${params.id}`)
        return {
            product: data
        }
    },
    methods: {
        async deleteHandler() {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$axios.delete(`http://localhost:8000/api/products/${this.product.id}`)
                    this.$swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                    )
                    this.$router.push('/products')
                }
            })
        }
    }

    // async created() {
    //     const p = await this.$content("products")
    //     .where({id: parseInt(this.$route.params.id)})
    //     .limit(1)
    //     .fetch();
    //     this.product = p[0];
    // },
    // data() {
    //     return {
    //         product: null,
    //     }
    // },
}
</script>

<style>

</style>