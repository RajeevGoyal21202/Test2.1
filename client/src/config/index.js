import axios from 'axios'

export const BASE_URL = 'http://localhost:8000'
console.log(BASE_URL)
export const axiosApi =  axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "auth":"sdfghjkl;"
  }
})