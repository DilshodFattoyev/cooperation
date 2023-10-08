import axios from "axios"
import { tokenStore } from "./token"

export const apiStore =  defineStore('apiStore',()=>{

   const url = ref('')

   const tokenS = tokenStore()

   const post = async (payload) =>{
      
   }
})