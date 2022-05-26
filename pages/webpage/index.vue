<template>
<v-container class="size">
    <v-card>
        <div class="card-content">
          <img src="~assets/bg.png" width="400px">
          <v-form
            class="input-form"
            ref="form"
            lazy-validation
          > 
            <div class ="text-title">Sign in</div>
            <v-text-field
              v-model="username"
              label="Username"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Password"

            ></v-text-field>
            <v-btn
              color="primary"
              @click="Signin"
              large
            >
                Sign in
            </v-btn>
          </v-form>
          </div>
        </v-card>
    </v-container>
</template>
<script>
export default {
  methods: {
    Signin(){
      
    },
  }
}
</script>

<style lang="scss" scoped>
  .size{
    margin: 90px auto;
    width: auto;
  }

  .text-title{
    padding-top: 130px;
    padding-bottom: 70px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .input-form{
    padding: 0px 35px;

  }
  .card-content{
    display: flex;
    justify-content: flex-end;
      
  }
  .v-btn{
    width: 300px ;
  }
</style>