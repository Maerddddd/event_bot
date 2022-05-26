<template>
<div><v-btn @click="postAll">eiei...</v-btn></div>
<v-container>
  <v-card>
    <v-list class="test">
      <v-list-item-group>
        <v-list-item
        >
          <v-list-item-content>
            <v-row>
              <v-col>
                 <v-list-item-title >asdasd</v-list-item-title>
              </v-col>
              <v-col>
                 <v-list-item-title >asdasd</v-list-item-title>
              </v-col>
              <v-col>
                 <v-list-item-title >asdasd</v-list-item-title>
              </v-col>
              <v-col>
                 <v-list-item-title >asdasd</v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
   data(){
    return { 
      tttest:[]

    }
    
  },
  methods: {
    postAll(){
        axios.get("https://event-bot-628b6-default-rtdb.firebaseio.com/events.json")
        .then(res=>{ console.log(res);
        })
      }
  },
 }
 
</script>
<style>
  .test{
    padding: 0px;
  }
</style>