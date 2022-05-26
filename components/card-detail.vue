<template>
<v-container>
    <v-card
        class="mx-auto"
        max-width="400"
        >
        <v-img
            class="white--text align-end"
            height="200px"
            :src="session.img"
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
                <p class="event-des ">Date: {{session.date}}</p>
                <p class="event-des mb-3">Time: {{session.time}}</p>
                <p class="event-des mb-3">
                    {{session.detail}}                          
                </p>
                <p class="event-des">

                </p>
                <p class="event-des mb-3">Signer: {{session.signer}}/{{session.maxsigner}}</p>
                <p class="event-des ">Food: {{session.food}}</p>
                <p class="event-des mb-3">Certificate: {{session.certificate}}</p>

            </div>
            
        </v-card>
        <v-btn
            end
            large
            color="primary"
            class ="w-100 mt-2 " @click="signup">
            Sign up
        </v-btn>
        </v-container>


                        
</template>
<script>
// console.log(this.$route.query.id)
export default {
    props: ['session'],
    methods: {
        signup(){
        //   this.$router.push('/event/event-detail')
        this.$axios.patch(`https://event-bot-628b6-default-rtdb.firebaseio.com/select_events/${this.$store.getters.getLine.userId}.json`, {eventId: this.session.id}).then((res) => {
        this.$router.push('/event/done')
            })
        },
  }
    
}
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