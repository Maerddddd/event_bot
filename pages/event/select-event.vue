<template>
  <div>
        <v-app-bar color ="#83C4F3"
        flat
        dense>
        <v-toolbar-title>Select Event</v-toolbar-title>
        </v-app-bar>
        <v-container class ="pt-0 pb-0">
            <v-row >
                <v-col cols="12" >
                    <div class ="month-head">
                      <!-- <v-select
                        :items="items"
                        :label= "list.month"
                        solo
                      ></v-select>  -->
                      {{list.month}}
                    </div>
                    <card
                    v-for="item in list.sessions"
                    :session="item"
                    :month="month"
                    :key="item.id"/>
                    </v-col>
            </v-row>
        </v-container>
</div>
</template>
<script>
import card from '~/components/card'
export default {
    components: {
        card
    },
  data(){
    return {
        isShowDialog: false,
        index: 0,
        dialog: {
            month:'',
            img:'',
            title:'',
            organizer:'',
            certificate:'',
            food:'',
            signer:'',
            maxsigner:'',
            
      },
      items: [0],
        list: [],
        event: this.$store.getters.getEvent
    }
  },
  mounted(){
    // api
    this.list = this.event[0]
    this.items= this.event.map((e)=> e.month)
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
    .month-head{
        width: 100%;
        text-align: center;
        font-weight: bold;
        color:#314F64;
        font-size: 14px;
        padding: 10px 0px;   
    }

</style>