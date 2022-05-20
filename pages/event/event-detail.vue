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
                        <eventdetail
                        v-for="item in list"
                        :session="item"
                        :key="item.id"/>
                </v-col>
            </v-row>
        </v-container>
</div>
</template>
<script>
import eventdetail from '~/components/card-detail'
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
            img:'',
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
    this.list = this.event[0].sessions.filter((e) => e.id == this.$route.query.id)

  },
  methods: {
      
  }
  
}
</script>
<style lang="scss" scoped>

</style>