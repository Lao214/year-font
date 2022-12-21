import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status:0,
    username:'',
    realname:'123',
    advertid:506,
    advertname:"year",
    device:'',
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_REALNAME: (state, realname) => {
      state.realname = realname
    },
    SET_DEVICE: (state, device) => {
      state.device = device
    },

  },
  actions: {
    setName(context,name){
      context.commit("SET_USERNAME",name)
    },
    setRealname(context,name){
       context.commit("SET_REALNAME",name)
    },
    setDevice(context,device){
      context.commit("SET_DEVICE",device)
    }
  },
  getters: {
    status: state => state.status,
    username: state => state.username,
    realname: state => state.realname,
    advertid: state => state.advertid,
    advertname: state => state.advertname,
    device: state => state.device,
  }
})

export default store;