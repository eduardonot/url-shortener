'use strict'

import axios from 'axios'

const config = {
  baseURL: 'https://url-shortener23.p.rapidapi.com',
  headers: {
    Authorization: 'Bearer ' + process.env.VUE_APP_BITLY_ACESS_TOKEN,
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.VUE_APP_X_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.VUE_APP_RAPID_API_HOST
  }
}

const instance = axios.create(config)

instance.interceptors.request.use(
  function (cfg) {
    return cfg
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export { instance }
export default axios
