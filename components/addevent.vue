<template>
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
                    >
                    </v-text-field>
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
                    v-model="certificate"
                    row
                  >
                    <v-radio
                      color="#83C4F3"
                      label="Have certificate"
                      value="Have certificate"
                    ></v-radio>
                    <v-radio
                      color="#83C4F3"
                      label="No certificate"
                      value="No certificate"
                    ></v-radio>
                    
                  </v-radio-group>

                  <v-subheader>
                  Support:{{food}},{{addevent_form.food_type}}
                  </v-subheader>
                  <v-checkbox
                    v-model="food"
                    color="#83C4F3"
                    label="Food"
                    hide-details
                  ></v-checkbox>
                  <v-select
                  :disabled="!food"
                  v-model="addevent_form.food_type"
                  :items ="food_type"
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
</template>

<script>
  import moment from 'moment'
  import { format, parseISO } from 'date-fns'
  export default { 
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
                    certificate:'',
                    food_type:'',
                    food:'',
                    },
        certificate: null,
        date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
        menu2: false,
        selectedItem: 1,
        nav_list: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Member', icon: 'mdi-account-multiple' },
          { title: 'Event', icon: 'mdi-alpha-e-box' },
        ],
        food_type: ['อาหารกลางวัน','อาหารว่าง','อาหารกลางวันและอาหารว่าง'],
        checkbox: false,
        food: false,
        start_time_select: ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
        end_time_select: ['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'],
        num: ['10','20','30','40','50'],
        certificate: ['Have certificate','No certificate'],
        
      }
    },
    methods: {
      addevent(){
        this.$emit('sendData',this.addevent_form)
      // this.$store.dispatch('setAddEvent', this.addevent_form)
      // this.$axios.post(`https://event-bot-628b6-default-rtdb.firebaseio.com/addevents.json`, this.$store.getters.getAddEvent)
    },
      
    },
     computed: {
      computedDateFormattedDatefns () {
        return this.addevent_form.date ? format(parseISO(this.addevent_form.date), 'EEEE, MMMM do yyyy') : ''
      },
    },
  }
</script>

<style lang="scss" >

.card-style{
  margin: 20px;
  border-width: 10px !important;
  border-radius: 10px !important;
  border-color: #F6FBFF !important;

}
.v-form{
  padding: 30px 60px;
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
