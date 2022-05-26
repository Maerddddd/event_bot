export const state = () => ({
  line: {
    pictureUrl: null,
    displayName: null,
    userId: null
  },
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
    addevent:{
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
    // data: {  
    //     agenda: [
    //       {
    //         date: "20 March 2020",
    //         sessions: [
    //           {
    //             time: "10:00 AM",
    //             title: "INTRODUCTIONS-1",
    //             spaker: "Marvelous Team",
    //             image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    //             duringTime: "100 min"
    //           },
    //           {
    //             type: "set",
    //             time: "12:00 AM",
    //             sessionSet: [
    //               {
    //                 title: "INTRODUCTIONS-2",
    //                 spaker: "Marvelous Team",
    //                 image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    //                 duringTime: "100 min"
    //               },
    //               {
    //                 title: "INTRODUCTIONS-3",
    //                 spaker: "Marvelous Team",
    //                 image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    //                 duringTime: "100 min"
    //               }
    //             ]
    //           }
    //         ]
    //       },
    //       {
    //         date: "21 March 2020",
    //         sessions: [
    //           {
    //             time: "10:00 AM",
    //             title: "INTRODUCTIONS-4",
    //             spaker: "Marvelous Team",
    //             image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    //             duringTime: "100 min"
    //           },
    //           {
    //             time: "10:00 AM",
    //             title: "INTRODUCTIONS-5",
    //             spaker: "Marvelous Team",
    //             image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    //             duringTime: "100 min"
    //           }
    //         ]
    //       }
    //     ],
    //     event: [
    //       {
    //         month: "Jan",
    //         sessions: [
    //           {
    //             id: 1,
    //             img:"https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
    //             title: "Event name test 01",
    //             organizer:"Its me Maerd",
    //             certificate:"Yes",
    //             food:"Yes",
    //             signer:0,
    //             maxsigner:50,
    //             detail:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    //             date:"Mon, 21 May",
    //             time:'9.00 - 16-00',
    //           },
    //           {
    //             id: 2,
    //             img:"https://www.cripto-valuta.net/wp-content/uploads/2021/06/shiba-inu.jpg",
    //             title: "Event name test 02",
    //             organizer:"Its me Maerd",
    //             certificate:"No",
    //             food:"Yes",
    //             signer:"20",
    //             maxsigner:"40",
    //             detail:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    //             date:"Date: Mon, 25 May",
    //             time:'Time: 9.00 - 10-00',
    //           },
    //           {
    //             id: 3,
    //             img:"https://play-lh.googleusercontent.com/kMCjIupuT3bUV-iGeWKBOPyEOwiICFwcst-r8KMLk0Udqf_dpV3tYQSQ3Sf5vndCHw",
    //             title: "Event name test 03",
    //             organizer:"Its me Maerd",
    //             certificate:"No",
    //             food:"No",
    //             signer:"32",
    //             maxsigner:"60",
    //             detail:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    //             date:"Mon, 26 May",
    //             time:'12.00 - 15-00',
    //           }
    //         ]
    //       },
    //       {
    //         month: "Feb",
    //         sessions: [
    //           {
    //             id: 1,
    //             img:"https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg",
    //             title: "Event name test 01",
    //             organizer:"Its me Maerd",
    //             certificate:"Yes",
    //             food:"Yes",
    //             signer:0,
    //             maxsigner:50,
    //             detail:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    //             date:"Mon, 21 May",
    //             time:'9.00 - 16-00',
    //           },
    //           {
    //             id: 2,
    //             img:"https://www.cripto-valuta.net/wp-content/uploads/2021/06/shiba-inu.jpg",
    //             title: "Event name test 02",
    //             organizer:"Its me Maerd",
    //             certificate:"No",
    //             food:"Yes",
    //             signer:"20",
    //             maxsigner:"40",
    //             detail:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    //             date:"Date: Mon, 25 May",
    //             time:'Time: 9.00 - 10-00',
    //           },
    //           {
    //             id: 3,
    //             img:"https://play-lh.googleusercontent.com/kMCjIupuT3bUV-iGeWKBOPyEOwiICFwcst-r8KMLk0Udqf_dpV3tYQSQ3Sf5vndCHw",
    //             title: "Event name test 03",
    //             organizer:"Its me Maerd",
    //             certificate:"No",
    //             food:"No",
    //             signer:"32",
    //             maxsigner:"60",
    //             detail:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    //             date:"Mon, 26 May",
    //             time:'12.00 - 15-00',
    //           }
    //         ]
    //       }
    //     ]
    //   }
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
    getLine(state){
        return state.line
      },
    getAddEvent(state){
      return state.addevent
    }
    
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
    SET_LINE(state, data){
        state.line = {
            ...state.line,
            ...data
        }
    },
    SET_ADDEVENT(state, data){
      state.addevent = {
          ...state.addevent,
          ...data
      }
  }   
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
    setLine({ commit }, data){
        commit('SET_LINE', data)
        },
    setAddEvent({ commit }, data){
      commit('SET_ADDEVENT', data)
      },
}