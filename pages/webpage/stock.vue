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
      <v-col cols="3" lg="2">
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
            @click="list_click"
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
      </v-col>

      <v-spacer></v-spacer>

      <v-col cols="6" lg="4">
        <div>
          <v-container>
                <v-card
                  class="card-style"
                  elevation="0"
                  outlined
                  >
                    <v-form>
                      <div class="title-card text-primary text-center">Add Event</div>

                          <v-subheader>
                            Event name:
                          </v-subheader>
                          <v-text-field
                            color="#83C4F3"
                            v-model="addevent_form.title"
                            outlined
                            dense
                          ></v-text-field>
                    
                          <v-subheader>
                            Organizer:
                          </v-subheader>
                          <v-text-field
                            color="#83C4F3"
                            v-model="addevent_form.organizer"
                            outlined
                            dense
                          ></v-text-field>

                          <v-subheader>
                            Date:
                          </v-subheader>
                          <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            max-width="290"
                            >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                :value="computedDateFormattedDatefns"
                                clearable
                                color="#83C4F3"
                                
                                readonly
                                outlined
                                dense
                                v-bind="attrs"
                                v-on="on"
                                @click:clear="date = null"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="addevent_form.date"
                              @change="menu2 = false"
                            ></v-date-picker>
                          </v-menu>
                          <v-row>
                          <v-col>

                          <v-subheader>
                            Start time:
                          </v-subheader>
                          <v-select
                            color="#83C4F3"
                            v-model="addevent_form.start_time_select"
                            :items="start_time_select"
                            dense
                            outlined
                          ></v-select>
                          </v-col>
                          <v-col>

                            <v-subheader>
                            End time:
                          </v-subheader>
                          <v-select
                            color="#83C4F3"
                            v-model="addevent_form.end_time_select"
                            :items="end_time_select"
                            dense
                            outlined
                          ></v-select>
                          </v-col>
                          </v-row>
                          
                          <v-subheader>
                            Event description:
                          </v-subheader>
                          <v-textarea
                            v-model="addevent_form.description"
                            color="#83C4F3"
                            outlined
                            dense
                          >
                          </v-textarea>
                            
                            <v-subheader>
                            Certificate:
                            </v-subheader>
                            <v-radio-group
                              v-model="row_radio"
                              row
                            >
                              <v-radio
                                color="#83C4F3"
                                label="Have certificate"
                                value="radio-1"
                              ></v-radio>
                              <v-radio
                                color="#83C4F3"
                                label="No certificate"
                                value="radio-2"
                              ></v-radio>
                            </v-radio-group>

                            <v-subheader>
                            Support:
                            </v-subheader>
                            <v-checkbox
                              v-model="support"
                              color="#83C4F3"
                              label="Food"
                              hide-details
                              
                            ></v-checkbox>
                            <v-select
                            :disabled="!support"
                            :items ="food_list"
                            label="Select type"
                            color="#83C4F3"
                            outlined
                            dense
                            class="mt-3"
                            ></v-select>
                            
                            <v-subheader>
                            จำนวนคนที่เปิดรับ:
                            </v-subheader>
                            <v-select
                            color="#83C4F3"
                            v-model="addevent_form.num"
                            :items="num"
                            dense
                            outlined
                          ></v-select>
                            
                          <v-btn
                            color="primary"
                            @click="addevent"
                          >
                            Submit
                          </v-btn>

                  </v-form>
                  </v-card>
          </v-container> 
        </div>
      </v-col>
      <v-spacer></v-spacer>
      </v-row>
    </div>
</template>
<script>
  import { format, parseISO } from 'date-fns'
  export default { 
    data(){
      return {
        addevent_form:{
                    eventID:'',
                    title:'',
                    organizer:'',
                    date:'',
                    start_time_select:'',
                    end_time_select:'',
                    description:'',
                    num:'',
                    },
        radioGroup: 1,
        row_radio: null,
        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        menu2: false,
        selectedItem: 1,
        nav_list: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Member', icon: 'mdi-account-multiple' },
          { title: 'Event', icon: 'mdi-alpha-e-box' },
        ],
        food_list: ['อาหารกลางวัน', 'อาหารว่าง', 'อาหารกลางวันและอาหารว่าง'],
        checkbox: false,
        support: false,
        start_time_select: ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
        end_time_select: ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
        num: ['10','20','30','40','50'],
        certificate: ['Have certificate','No certificate'],
        
      }
    },
    methods: {
      addevent(){
      this.$store.dispatch('setAddEvent', this.addevent_form)
      console.log("AddEvent")
      this.$axios.patch(`https://event-bot-628b6-default-rtdb.firebaseio.com/addevents/eventid/eventdes.json`, this.$store.getters.getAddEvent)
    },
      list_click(){

      },
    },
     computed: {
      computedDateFormattedDatefns () {
        return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
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
.card-style{
  margin: 20px;
  border-width: 10px !important;
  border-radius: 10px !important;
  border-color: #F6FBFF !important;

}
.v-form{
  padding: 30px;
}
.title-card{
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}
.v-subheader{
  padding: 0px;
  height: 30px;
}
.v-input--selection-controls{
  margin-top: 0px;
}
</style>
