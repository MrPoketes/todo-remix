import { redirect } from "@remix-run/node";
import axios from "axios";

export const client = axios.create({
    baseURL:process.env.API_HOST,
    headers:{
        "X-Requested-With":"XMLHttpRequest",
        "Content-Type":"application/json"
    }
})

client.interceptors.response.use((response)=>response,(error)=>{
    if(!error.response){
        return Promise.reject(error)
    }
    if(error.response.status === 401){
        throw redirect("/")
    }
    return Promise.reject(error)
})

