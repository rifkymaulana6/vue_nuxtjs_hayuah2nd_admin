<template>
    <v-card tile flat class="pa-md-10 pa-5 text-center" color="surface">
        <h2 class="text-md-h6 font-weight-bold" style="color: #E2C68D">Hayuah2nd</h2>
        <div class="text-center">
            <v-btn v-for="(b,i) in sm" :key="`socialMedia-${i}`" target="_blank" :href="b.link" color="#A0AC7D" class="mr-2" fab depressed>
                <v-icon>{{ b.icon }}</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>
<script>
export default { 
    data(){
        return{
            sm: [
                {
                    icon: `mdi-facebook`,
                    link: `https://web.facebook.com/hayuahsecondthriftshop`,
                },
                {
                    icon: 'mdi-music-note',
                    link: `https://www.tiktok.com/@hayuahofficial?_t=8YSno0jC8tW&_r=1`,
                },
                {
                    icon: `mdi-instagram`,
                    link: `https://www.instagram.com/hayuah2nd/?hl=id`,
                },  
            ]
        }
    }
}
</script>
<style lang="">
    
</style>