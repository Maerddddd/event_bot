<template>
    <v-card
        class="mx-auto"
        max-width="400"
        @click="select"
        >
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
            >
            <!-- <div class="view-detail">View Detail</div> -->
        </v-img>
        <div class="card-content">
            <div>
                <v-card-title class ="pb-0">
                    {{session.title}}
                </v-card-title>
                    <v-card-text class="text--primary">
                    {{session.organizer}}
                    </v-card-text>
            </div>
                <v-card
                    v-for="n in 1"
                    :key="n"
                    :class="n === 1 && 'mt-auto'"
                    class="iconeiei"
                    tile
                >
                    <v-icon class="icon_check">
                        mdi-certificate-outline
                    </v-icon>
                    <v-icon class="{updatedicon: food}" >
                        mdi-food
                    </v-icon>
                    <v-icon class="icon_check">
                        mdi-account
                    </v-icon>
                    <span class="subheading">{{session.signer}}/{{session.maxsigner}}</span>
                </v-card>             
            </div>
        </v-card>
</template>
<script>
export default {
    props: ['session'],
    methods: {
        select(){
        this.$router.push('/event/event-detail')
        },
        food(){
           if (this.session.food == true){
               return "color: #83C4F3;"
           }

        }

  }
}
</script>
<style lang="scss" scoped>
    .updatedColor{
        color:#83C4F3;
    }
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
    .updatedicon{
        color:pink;
    }

</style>