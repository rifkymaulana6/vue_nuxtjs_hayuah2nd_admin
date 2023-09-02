<template>
    <div>
        <Nav/>
        <v-container>
            <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
                <h2 class="text-md-h3">Edit Product</h2>
                <br/>
                <form>
                    <v-text-field v-model="title"
                        label="Product Title"
                        outlined
                        clearable></v-text-field>
                    <v-text-field v-model="description"
                        label="Description"
                        outlined
                        clearable></v-text-field>
                    <v-textarea v-model="full_description"
                        outlined
                        name="full_description"
                        label="Full Description"
                    ></v-textarea>
                    <v-text-field v-model="category"
                        label="Category"
                        outlined
                        clearable></v-text-field>
                    <v-text-field v-model="price"
                        label="Price"
                        outlined clearable
                    ></v-text-field>
                    <v-text-field v-model="stock"
                        label="Stock"
                        outlined
                        clearable
                    ></v-text-field>
                    <v-switch
                        v-model="hotItems"
                        :label="`Hot Item`"
                    ></v-switch>
                    <v-file-input v-model="image"
                    label="Picture"
                    filled
                    prepend-icon="mdi-camera"
                ></v-file-input>
                <v-btn
                    @click="submitHandler"
                    class="mr-4 font-weight-bold"
                    color="success"
                    >
                    submit
                    </v-btn>
                    <!-- <v-btn color="error" class="font-weight-bold">
                    clear
                    </v-btn> -->
                </form>
            </v-card>
        </v-container>
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
                product: data,
                title: data.title,
                description: data.description,
                full_description: data.full_description,
                category: data.category,
                price: data.price,
                stock: data.stock,
                hotItems: data.hotItems,
                image: data.image
            }
        },
        data() {
            return {
                title: null,
                description: null,
                full_description: null,
                category: null,
                price: null,
                stock: null,
                hotItems: false,
                image: null,
                message: null
            }
        },
        methods: { 
            async submitHandler() {
                const data = {
                    'title': this.title,
                    'description': this.description,
                    'full_description': this.full_description,
                    'category': this.category,
                    'price': this.price,
                    'stock': this.stock,
                    'hotItems': this.hotItems,
                    'image': this.image
                }
                const id = this.$route.fullPath.split('/').slice(-1).pop()
                try {
                    const res = await this.$axios.put(`/products/${id}`, data, {
                    headers: {
                        'Content-type': 'multipart/form-data'
                    }
                    })
                    this.$swal({
                        toast: true,
                        text: "Your product has been successfully updated",
                        icon: 'success',
                        timer: 4000,
                        timerProgressBar: true,
                        showConfirmButton: false,
                        position: 'top-end',
                    });
                    this.$router.push('/products')
                } catch (e) {
                    this.error = e.response.data.message
                }
            }
        },
    }
</script>

<style>

</style>