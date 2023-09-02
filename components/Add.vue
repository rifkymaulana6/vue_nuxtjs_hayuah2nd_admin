<template>
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
        <h2 class="text-md-h3">Add Product</h2>
        <br/>
        <v-snackbar
                           v-model="snackbar"
                        >
                           {{ message }}
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
        <form>
            <v-text-field v-model="title"
                label="Product Title"
                outlined
                clearable></v-text-field>
            <v-text-field v-model="description"
                label="Description"
                outlined
                clearable></v-text-field>
            <v-textarea
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
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear" color="error" class="font-weight-bold">
              clear
            </v-btn>
          </form>
    </v-card>
</template>

<script>

     
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
            picture: null,
            message: null,
            snackbar: false
        }
    },
    methods: {
        async submit() {
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
                const res = await this.$axios.post('/products', data)
                this.message = res.data.message
                this.snackbar = true
            } catch (e) {
                this.error = e.response.data.message
            }
        },
      clear () {
        this.title = ''
        this.description = ''
        this.full_description = ''
        this.category = ''
        this.price = ''
        this.stock = ''
        this.hotItems = true
        this.picture = null
        this.$refs.observer.reset()
      },
    },
}
</script>

<style>

</style>