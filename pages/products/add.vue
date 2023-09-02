<template>
  <div>
    <Nav/>
    <v-container>
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
        <h2 class="text-md-h3">Add Product</h2>
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
              class="mr-4 font-weight-bold"
              color="success"
              @click="submitHandler"
            >
              submit
            </v-btn>
            <!-- <v-btn @click="clear" color="error" class="font-weight-bold">
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
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
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
          try {
            const res = await this.$axios.post('/products', data, {
              headers: {
                'Content-type': 'multipart/form-data'
              }
            })
              this.$swal({
                toast: true,
                text: "Your product has been successfully uploaded",
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
      },
    // clear () {
    //   this.title = ''
    //   this.description = ''
    //   this.full_description = ''
    //   this.category = ''
    //   this.price = ''
    //   this.stock = ''
    //   this.hotItems = true
    //   this.picture = null
    //   this.$refs.observer.reset()
    // },
  },
}
</script>

<style>

</style>