<template>
    <div>
        <v-app-bar color ="#83C4F3"
        flat
        dense
        dark>
        <v-toolbar-title>Register</v-toolbar-title>
        </v-app-bar>
        <v-container class ="pt-0 pb-0">
            <v-row>
                <v-col cols= "12" class="pt-11 pb-0 text-center profile-img"> 
                        <!-- <img src ="~assets/profile-img.png" alt="" width="120" height="120"> -->
                        <img v-if="getLine.pictureUrl == ''" src="~assets/profile-img.png" alt="" width="120">
                        <img v-else :src="getLine.pictureUrl" alt="" width="120">

                </v-col>
                <v-col cols= "12" class = "pt-4 pb-0 text-primary text-title text-center">          
                        {{getLine.displayName}}
                </v-col>
                <v-col cols= "12">
                    <v-form class ="pl-8 pr-8">
                        <v-text-field
                            class = "pt-2 pb-2" 
                            v-model="form.firstname"
                            dense
                            label="First Name"
                        ></v-text-field>
                        <v-text-field
                            class = "pt-2 pb-2"
                            v-model="form.lastname"
                            dense
                            label="Last Name"
                        ></v-text-field>
                        <v-text-field
                            class = "pt-2 pb-2"
                            v-model="form.email"
                            dense
                            :rules="emailRules"
                            label="Email"
                        ></v-text-field>
                        <v-text-field
                            class = "pt-2 pb-2"
                            v-model="form.phonenumber"
                            dense
                            :rules="phoneRules"
                            @keypress="onlyNumber($event, 10)"
                            label="Phone Number"
                        ></v-text-field>
                         <v-dialog
                            ref="dialog"
                            v-model="modal"
                            persistent
                            width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                class = "pt-2 pb-2"
                                dense
                                v-model="form.dateofbirth"
                                label="Date of Birth"
                                append-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            :max="new Date().toISOString().substr(0, 10)"
                            v-model="form.dateofbirth"
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="modal = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(form.dateofbirth)">
                                OK
                            </v-btn>
                            
                            </v-date-picker>
                        </v-dialog>
                        <v-btn
                            large
                            color="primary"
                            class ="w-100 mt-5" @click="next">
                            Register
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const REGEX_PHONE = /^[0]([0-9]{9})*$/
    const REGEX_NUMBER = /^[0-9]*$/
    export default {
        mounted(){
                liff.init({
                liffId: '1657115807-gN69lN61'
                }).then(() => {
                if(liff.isLoggedIn()){
                    liff.getProfile().then(profile => {                    
                    this.$store.dispatch('setLine', profile);
                    this.isDone();
                    })
                }else{
                    liff.login();
                }
                })
            },  
        // mounted(){
        //     liff.init({
        //         liffId:'1657115807-gN69lN61'
        //     }).then(()=>{
        //         if(liff.isLoggedIn()){
        //             console.log("Login")
        //             liff.getProfile().then(profile => {                 
        //             this.$store.dispatch('setLine', profile);
        //             this.isDone();
        //             })
        //         }else{
        //             liff.login();
        //         }
        //     })
        // },
        data() {
            return {
                // dialog: false,
                // errorMsg: '',
                form:{
                    firstname:this.$store.getters.getRegister.firstname,
                    lastname:this.$store.getters.getRegister.lastname, 
                    email:this.$store.getters.getRegister.email,
                    phonenumber:this.$store.getters.getRegister.phonenumber,
                    // dateofbirth:this.$store.getters.getRegister.dateofbirth,
                    dateofbirth:this.$store.getters.getRegister.dateofbirth,
                    
                },
                emailValidated: false,
                phoneValidated: false,
                modal: false,
                // emailRules: [ 
                //     v => !!v || 'E-mail is <required',
                //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                // ],
                emailRules: [ value => this.emailValidator(value)],
                phoneRules: [ value => this.phoneValidator(value)]

            }
        },
        computed: {
                getLine(){
                        return this.$store.getters.getLine;      
                        }
                    },
        methods: {
            isDone(){
                this.$axios.get(`https://event-bot-628b6-default-rtdb.firebaseio.com/members/${this.$store.getters.getLine.userId}/profile.json`).then((res) => {
                    if(res.data != null){
                    this.$router.push('/register/done');
                    }
                });
                },
             phoneValidator(value){    
                this.phoneValidated = false  
                if(value == ''){
                    return 'Required'
                }
                if(REGEX_PHONE.test(value) && value.length == 10){ 
                    this.phoneValidated = true
                    return true
                }
                return "Please input Phone number"
                },
            onlyNumber(event, max){  
                if(event.target.value.length == 0){
                    if(event.key != 0){
                    return event.preventDefault()
                    }
                }else{
                    if(!REGEX_NUMBER.test(event.key) || event.target.value.length == max){
                    return event.preventDefault()
                    }
                }      
                }, 
            emailValidator(value){
                this.emailValidated = false
                if(value == ''){
                    return 'Required'
                }
                if(REGEX_EMAIL.test(value)){
                    this.emailValidated = true
                    return true
                }
                return "Email is Invalid"
            },
            validate(){
                let validated = true
                const errors  = []
                const validatorField = [
                    'firstname',
                    'lastname',
                    'email',
                    'phonenumber',
                    'dateofbirth',
                ]
                validatorField.forEach((field) => {
                    if(this.form[field] == ''){
                        validated = false
                        errors.push(`Please enter your ${field}.`)
                    }
                })
                if(!this.emailValidated){
                    validated = false
                    errors.push(`Email must be valid`)
                }
                if(!this.phoneValidated){
                    validated = false
                    errors.push(`Phone number must be valid`)
                }
                if (!validated){
                    this.dialog = true
                    this.$store.dispatch('setDialog', {
                        isShow: true,
                        title:'Form Error',
                        message: errors.map((error) => error+'<br/>').join('')

                    })
                }
                return validated
                 },
                next(){
                    if(this.validate()){
                        this.$store.dispatch('setRegister', this.form)
                        this.$router.push('/register/registed')
                }
                }
        }
    }
</script>
<style lang="scss" scoped>

</style>