export const state = () => ({
    dialog:{
        isShow:false,
        title:'',
        message:''
    },
    register:{
        firstname:'',
        lastname:'',
        email:'',
        phonenumber:'',
        dateofbirth:'',
    },
    data: {  
        // agenda: [
        //   {
        //     date: "20 March 2020",
        //     sessions: [
        //       {
        //         time: "10:00 AM",
        //         title: "INTRODUCTIONS-1",
        //         spaker: "Marvelous Team",
        //         image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //         duringTime: "100 min"
        //       },
        //       {
        //         type: "set",
        //         time: "12:00 AM",
        //         sessionSet: [
        //           {
        //             title: "INTRODUCTIONS-2",
        //             spaker: "Marvelous Team",
        //             image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //             duringTime: "100 min"
        //           },
        //           {
        //             title: "INTRODUCTIONS-3",
        //             spaker: "Marvelous Team",
        //             image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //             duringTime: "100 min"
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     date: "21 March 2020",
        //     sessions: [
        //       {
        //         time: "10:00 AM",
        //         title: "INTRODUCTIONS-4",
        //         spaker: "Marvelous Team",
        //         image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //         duringTime: "100 min"
        //       },
        //       {
        //         time: "10:00 AM",
        //         title: "INTRODUCTIONS-5",
        //         spaker: "Marvelous Team",
        //         image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        //         duringTime: "100 min"
        //       }
        //     ]
        //   }
        // ],
        event: [
          {
            month: "May 2022",
            sessions: [
              {
                id: 1,
                title: "Event name test 01",
                organizer:"Its me Maerd",
                certificate:"Yes",
                food:"Yes",
                signer:0,
                maxsigner:50,
                detail:"eiei",
                date:"Mon, 25 May",
                time:'9.00 - 12-00',
              },
              {
                id: 2,
                title: "Event name test 02",
                organizer:"Its me Maerd",
                certificate:"Yes",
                food:"Yes",
                signer:"20",
                maxsigner:"40",
                detail:"eiei",
                date:"Date: Mon, 25 May",
                time:'Time: 9.00 - 12-00',
              },
              {
                id: 3,
                title: "Event name test 03",
                organizer:"Its me Maerd",
                certificate:"Yes",
                food:"Yes",
                signer:"32",
                maxsigner:"60",
                detail:"eiei",
                date:"Mon, 25 May",
                time:'9.00 - 12-00',
              }
            ]
          },
          {
            month: "Mar 2022",
            sessions:[
              {
                id: 4,
                title: "Event name test 04",
                organizer:"Its me Maerd",
                certificate:true,
                food:true,
                signer:"32",
                maxsigner:"50",
                detail:"eiei",
              },
              {
                id: 5,
                title: "Event name test 05",
                organizer:"Its me Maerd",
                certificate:false,
                food:true,
                signer:"22",
                maxsigner:"50",
                detail:"eiei",
              },
              {
                id: 6,
                title: "Event name test 06",
                organizer:"Its me Maerd",
                certificate:true,
                food:false,
                signer:"11",
                maxsigner:"40",
                detail:"eiei",
                
                
              }
            ]
          }
        ]
      }
    })

export const getters = {
    // getUser(state){
    //     return state.user  
    //   },
    getRegister(state){
        return state.register
      },
    getDialog(state){
        return state.dialog
      },
    getEvent(state){
        return state.data.event
      },
    // getAgenda(state){
    //     return state.data.agenda
    //   },
    // getSurvey(state){
    //     return state.survey
    //   },
    // getLine(state){
    //     return state.line
    //   }
    
}

export const mutations = {
    SET_REGISTER(state, data){
        state.register = {
          ...state.register,
          ...data
        }
      },
    // SET_USER(state, data){
    //     state.user = {
    //         ...state.user,
    //         ...data
    //     }
    // },
    SET_DIALOG(state, data){
        state.dialog = {
            ...state.dialog,
            ...data
        }
    },
    // SET_SURVEY(state, data){
    //     state.survey = {
    //         ...state.survey,
    //         ...data
    //     }
    // },
    // SET_LINE(state, data){
    //     state.line = {
    //         ...state.line,
    //         ...data
    //     }
    // }
    
}

export const actions = {
    // setUser({ commit }, data){
    //     commit('SET_USER', data)
    //     },
    setRegister({ commit }, data){
        commit('SET_REGISTER', data)
        },
    setDialog({ commit }, data){
        commit('SET_DIALOG', data)
        },
    // setSurvey({ commit }, data){
    //     commit('SET_SURVEY', data)
    //     },
    // setLine({ commit }, data){
    //     commit('SET_LINE', data)
    //     }
}