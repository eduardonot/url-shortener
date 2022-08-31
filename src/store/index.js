import { createStore } from 'vuex'
import { instance as request } from '@/plugins/axios'

export default createStore({
  state: {
    shortenedUrl: ''
  },
  getters: {
    getShortenedUrl: (state) => {
      return state.shortenedUrl
    }
  },
  mutations: {
    setShortenedUrl: (state, payload) => {
      state.shortenedUrl = payload
    }
  },
  actions: {
    shorten ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        request.post('/shorten', { url: payload })
          .then(response => {
            commit('setShortenedUrl', response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
