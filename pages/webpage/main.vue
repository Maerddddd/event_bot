<template>
  <div>
    <v-app-bar
      color="#83C4F3"
      elevation="0"
    >
      <img src="~assets/logo.png" width="150px">
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-row>
      <v-col cols="3" class="nav">
        <div>
        <v-navigation-drawer
          permanent
          >
            <v-list 
            dense
            class="list-style"
            nav
            >
            <v-list-item-group
                v-model="selectedItem"
                color="primary"
                >
                <v-list-item
                v-for="(item,index) in nav_list"
                :key="item.title"
                @click="link(index+1)"
                
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        </div>
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="8"
        v-if="state_tab==1"> 
          123
      </v-col>
      <v-col cols="8"
        v-if="state_tab==2">
          456
      </v-col>
      <v-col cols="8"
        v-if="state_tab==3">
        <addevent @sendData="addeventted"/>
      </v-col>
      <v-spacer></v-spacer>
      </v-row>
    </div>
</template>
<script>
  import addevent from '~/components/addevent'
  import axios from 'axios'
  export default {
    data(){
    return {
        // addevent_form:{
        //             title:'',
        //             organizer:'',
        //             date:'',
        //             start_time_select:'',
        //             end_time_select:'',
        //             description:'',
        //             num:'',
        //             },
        selectedItem: null,
        nav_list: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard'},
        { title: 'Member', icon: 'mdi-account-multiple'},
        { title: 'Event', icon: 'mdi-alpha-e-box'},
        ],
        state_tab: 1,
        components:{ 
          addevent
        }
        
    }
    },
    methods: {
      link(status){
        this.state_tab = status
      },
      addeventted(postData){
        // console.log("eiei=",postData)
        axios.post("https://event-bot-628b6-default-rtdb.firebaseio.com/events.json",postData).then(res=>{
          console.log(res);
        })
      }
    },
     
  }
</script>

<style lang="scss" >
  .list-style{
  height: 100vh;
  
}
.v-navigation-drawer__border{
  width: 0px;
}
.v-navigation-drawer__content{
  background-color: #F6FBFF !important;
}

.v-input--selection-controls{
  margin-top: 0px;
}
.nav{
  padding-bottom: 0px;
}
</style>