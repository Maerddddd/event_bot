<template>
                    <v-card
                        class="mx-auto"
                        max-width="400"
                        >
                        <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
                            >
                        </v-img>
                        <div class="card-content">
                            <div>
                                <v-card-title class ="pb-0">
                                    {{session.title}}
                                </v-card-title>
                                    <v-card-text class="text--primary">
                                    {{session.organizer}}
                                    </v-card-text>
                            </div>
                            </div>
                            <div class="card-content2">
                                <p class="event-des ">{{session.date}}</p>
                                <p class="event-des mb-3">{{session.time}}</p>
                                <p class="event-des mb-3">
                                    {{session.detail}}                          
                                </p>
                                <p class="event-des">

                                </p>
                                <p class="event-des mb-3">{{session.signer}}/{{session.maxsigner}}</p>
                                <p class="event-des ">Food: Yes</p>
                                <p class="event-des mb-3">Certificate: Yes</p>

                              
                            </div>
                        </v-card>
</template>
<script>
export default {
    props: ['session'],
}
// export default {  
//   data(){
//     return {
//       name: this.$store.getters.getRegister.firstname
//     }
//   },
//   methods: {
//     select(){
//       this.$router.push('/event/event-detail')
//     },
//   }
// }
</script>
<style lang="scss" scoped>

    .v-card__title{
        font-size: 16px;
        color:#314F64;
    }
    .v-card__text{
        font-size: 14px;
        color:#454545;
    }
    .subheading{
        font-size: 14px;
    }
    .card-content{
        display: flex;
        justify-content: space-between;
        padding: 15px ;
        
    }
    .v-card__title,.v-card__text{
        padding: 0px;
    }
    .iconeiei{
        padding: 0px;
        box-shadow: none !important;
    }
    .mx-auto{
        border-radius:10px;
    }
    .view-detail{
        font-size: 13px;
        color:#314F64;
        border-radius: 8px;
        padding: 10px;
        background-color: white;
        font-weight: bold;
        display: inline;
        position: absolute;
        bottom: 11px;
        right: 11px;

    }
    .v-card+.v-card{
        margin-top: 10px;
    }
    .card-content2{
        padding:  0px 15px ;
        padding-bottom: 15px !important;
        
    }
    .event-des{
        font-size: 14px !important;
        color:#314F64;
        margin: 0px;
    }

    
    

</style>