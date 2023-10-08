export const tokenStore = defineStore('tokenStore', () => {
   const token = useCookie('token')
   const headerToken = ref('')

   token.value = token.value || ''
   const  setToken = (payload) =>{
      token.value = payload
      headerToken.value = {
         'authorization':`Bearer ${token.value}`
      }
   }

   return{
      token,
      setToken,
      headerToken,
   }
})