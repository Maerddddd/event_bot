<template>
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
            v-for="item in nav_list"
            :key="item.title"
            @click="link"
            :to="item.path"
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
</template>
<script>
  
  export default { 
    // routes: [{
    //     path:'',
    //     component:{
    //         test01: () => im
    //     }
    // }],
    data(){
    return {
        addevent_form:{
                    title:'',
                    organizer:'',
                    date:'',
                    start_time_select:'',
                    end_time_select:'',
                    description:'',
                    num:'',
                    },
        selectedItem: null,
        nav_list: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', path:'test02' },
        { title: 'Member', icon: 'mdi-account-multiple', path:'/test01' },
        { title: 'Event', icon: 'mdi-alpha-e-box', path:'/addevent' },
        ],
        
    }
    },
    methods: {
      link(){

      },
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
</style>
