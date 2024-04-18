import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${import.meta.env.VITE_TBDB_ACCESS_TOKEN}`
    }
})


  
  
