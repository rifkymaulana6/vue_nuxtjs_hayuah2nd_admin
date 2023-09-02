<template>
    <div>
        <v-app-bar 
            color="#4C7353" 
            height="80" 
            class="el" 
            app 
            :style="{padding : $vuetify.breakpoint.mdAndUp ? `0px 100px`: ``}">
            <img @click="$router.push(`/`)" class="mr-3 pointer" :src="require('../assets/img/hayuah2nd_logo.png')" height="120"/>
            <!-- <v-toolbar-title @click="$router.push(`/`)" class="text-md-h5 font-weight-bold pointer">
                <span style="color: #E2C68D">Hayuah2nd</span> 
            </v-toolbar-title> -->
            <v-spacer/>
            <v-btn nuxt to="/products" text color="#E2C68D" class="font-weight-bold">
                <div>Products</div>
                <!-- <v-icon size="20" color="#E2C68D">mdi-store-outline</v-icon> -->
            </v-btn>
            <v-btn nuxt to="/offers" text color="#E2C68D" class="font-weight-bold">
                <div>Offer</div>
            </v-btn>
            <v-divider vertical class="mx-md-5 mx-2" color="#E2C68D"/>
            <v-btn @click="toggleTheme" icon>
                <v-icon size="20" color="#E2C68D">mdi-brightness-6</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>
<script>

export default {
    methods: {
        toggleTheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    },
};

</script>
<style>
    
</style>