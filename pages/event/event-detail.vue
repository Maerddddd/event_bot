<template>
  <div>
        <v-app-bar color ="#83C4F3"
        flat
        dense>
        <v-toolbar-title>Select Event</v-toolbar-title>
        </v-app-bar>
        <v-container class ="pt-0 pb-0">
            <v-row >
                <v-col cols="12"
                    class ="pt-5">
                    <!-- <v-card
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
                                    Event Name
                                </v-card-title>
                                    <v-card-text class="text--primary">
                                    Organizer
                                    </v-card-text>
                            </div>
                            </div>
                            <div class="card-content2">
                                <p class="event-des ">Date: Mon, 25 May</p>
                                <p class="event-des mb-3">Time: 9.00 - 12-00</p>
                                <p class="event-des mb-3">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/> 
                                    Velit officia consequat duis enim velit mollit.<br/> 
                                    Exercitation veniam consequat sunt nostrud amet.<br/>                            
                                </p>
                                <p class="event-des">

                                </p>
                                <p class="event-des mb-3">Signer: 20/45</p>
                                <p class="event-des ">Food: Yes</p>
                                <p class="event-des mb-3">Certificate: Yes</p>

                              
                            </div>
                        </v-card> -->
                        <eventdetail
                        v-for="item in list.sessions"
                        :session="item"
                        :key="item.id"/>

                        <v-btn
                            end
                            large
                            color="primary"
                            class ="w-100 mt-2 " @click="signup">
                            Sign up
                        </v-btn>
                    </v-col>
            </v-row>
        </v-container>
</div>
</template>
<script>
import eventdetail from '~/components/eventdetail'
export default {
    components: {
        eventdetail,
},
  data(){
    return {
        isShowDialog: false,
        index: 0,
        dialog: {
            month:'',
            title:'',
            organizer:'',
            certificate:'',
            food:'',
            signer:'',
            maxsigner:'',
            detail:'',
            date:'',
            time:'',
      },
        list: [],
        event: this.$store.getters.getEvent
    }
  },
  mounted(){
    // api 
    this.list = this.event[0]
  },methods: {
    select(){
      this.$router.push('/event/event-detail')
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