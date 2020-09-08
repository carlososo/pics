import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com' ,
    headers:{
        Authorization: 'Client-ID rInqwAnph_m3WFDLFL_vv-oyQ9Ty-cTXZSmk-XfhD90'
      }
})