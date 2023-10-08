<template >
   <div class="auth">
      <div class="auth__left">
         <img src="../img/logo.png" alt="">
      </div>
      <div class="auth__right">
         <div class="auth__form">
            <div class="title">Kirish</div>
               <el-form 
               label-position="top" 
               :model="user" 
               label-width="120px"
               :rules="rules"
               >
                  <el-form-item label="Login" prop="login">
                     <el-input v-model="user.login" />
                  </el-form-item>
                  <el-form-item class="pass" label="Parol" prop="password">
                     <el-input v-model="user.password" type="password" show-password />
                  </el-form-item>

                  
                  <el-form-item>
                     <el-button class="btn" type="primary" @click="$router.push('/health')">Tizimga kirish</el-button>
                  </el-form-item>
               </el-form>
         </div>
      </div>
   </div>
   <slot />
</template>

<script setup>
   const user = ref({})
   const rules = ref({
      login:[
         {required: true, message: 'Login kiriting', trigger: 'blur'}
      ],
      password:[
         {required: true, message: 'Parol kiriting', trigger: 'blur'}
      ]
   })

   // const login = ()=>{
   //    console.log(user.value);
   // }

   const login = () => {
  if (!formRef.value) return
  formRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!')
      if( (_form.value.login == 'admin') && (_form.value.password == 'admin') ){
         localStorage.setItem('role', JSON.stringify('admin') )
         router.push('/admin')     
      }
      else if((_form.value.login == 'user') && (_form.value.password == 'user') ){
         localStorage.setItem('role', JSON.stringify('user') )
         router.push('/health')
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss">
@import '../public/assets/css/auth.scss';
</style>