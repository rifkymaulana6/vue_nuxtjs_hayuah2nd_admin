<template>
    <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
        <h2 class="text-md-h3">Sell Your Item</h2>
        <br/>
        <form>
            <v-text-field v-model="name"
            label="Product Name"
            outlined
            clearable></v-text-field>
            <v-text-field v-model="brand"
            label="Brand"
            outlined
            clearable></v-text-field>
            <v-text-field v-model="price"
            label="Price"
            outlined
            clearable></v-text-field>
            <v-text-field v-model="wanumber"
            label="WhatsApp Number"
            outlined
            clearable></v-text-field>
            <v-textarea
                  outlined
                  name="flaws"
                  label="Flaws"
            ></v-textarea>
            <v-file-input
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

}
</script>

<style>

</style>