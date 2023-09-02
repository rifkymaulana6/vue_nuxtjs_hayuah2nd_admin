<template>
    <div>
        <Nav/>
        <v-container v-if="offer">
            <v-row justify="center">
                <v-col cols="11" md="7">
                    <h2 class="text-center text-md-h4 font-weight-bold">
                        {{offer.name}}
                    </h2>
                    <br/>
                    <v-img width="100%" class="el rounded-lg" height="50vh" :src="offer.image"></v-img>
                    <p class="mt-5 mb-7">
                        {{ offer.flaws }}
                    </p>
                    <v-chip x-large label outlined class="mr-1">
                        {{offer.phone}}
                    </v-chip>
                    <v-dialog
                          v-model="dialog"
                          persistent
                          max-width="600px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              color="green"
                              dark
                              v-bind="attrs"
                              v-on="on"
                            >
                            <v-icon size="20" color="white" class="mr-2">mdi-whatsapp</v-icon>
                            <span color="white">Go To WhatsApp</span>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title>
                              <span class="text-h5">Enter Your Bid</span>
                            </v-card-title>
                            <v-card-text>
                              <v-container>
                                <v-row>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="4"
                                  >
                                    <v-text-field v-model="bid"
                                      label="Your bid*"
                                      required
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-container>
                              <small>*indicates required field</small>
                            </v-card-text>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                color="red"
                                text
                                @click="dialog = false"
                              >
                                Close
                              </v-btn>
                              <v-btn
                              @click="sendHandler"
                                color="green"
                                text
                                target="_blank"
                                :href="url"
                              >
                                Send
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <br/><br/>
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
        const { data } = await axios.get(`http://localhost:8000/api/sells/${params.id}`)
        return {
            offer: data
        }
    },
    data: () => ({
      dialog: false,
      bid: null,
      url: ''
    }),
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
                    this.$axios.delete(`http://localhost:8000/api/sells/${this.offer.id}`)
                    this.$swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success',
                    )
                    this.$router.push('/offers')
                }
            })
        },
        async sendHandler() {
            const id = this.$route.fullPath.split('/').slice(-1).pop()
            const { data: offer } = await axios.get(`http://localhost:8000/api/sells/${id}`)
            const data = {
                'bid': this.bid,
            }
            this.url = 'https://api.whatsapp.com/send?phone=6282126201022&text=Saya%20memberi%20tawaran%20Rp.%20' + data.bid + '%20untuk%20' + offer.name
        }
    }
}
</script>

<style>

</style>