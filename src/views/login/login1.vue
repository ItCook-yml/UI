<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
const usernameDom = ref(null); //用户名输入框dom
const passwordDom = ref(null); //密码输入框dom
//-----------------------------------------------------------
const username = ref("");//用户名输入内容

const input_focus1 = ref(false);  //判断用户输入框是否聚焦
const placeholder1 = ref("请输入用户名");
const handleFocus1 = () => {   //聚焦操作
  input_focus1.value = true;   //先将聚焦判断设置为true ，方便样式转换
  placeholder1.value = "";     //再将提示字清空
}

const handleBlur1 = () => {    //失焦操作
  input_focus1.value = false;
  placeholder1.value = "请输入用户名";
}
//-----------------------------------------------------------
const password = ref("");//密码输入内容
const input_focus2 = ref(false);
const placeholder2 = ref("请输入密码");
const handleFocus2 = () => {
  input_focus2.value = true;
  placeholder2.value = "";
}

const handleBlur2 = () => {
  input_focus2.value = false;
  placeholder2.value = "请输入密码";
}

//-----------------------------------------------------------
//正则验证
const isUsernameValid = ref(true);
const checkusername = () =>{
  const regex = /^[a-zA-Z0-9_-]{3,16}$/;
  isUsernameValid.value = regex.test(username.value);
}

const isPasswordValid = ref(true);
const checkPasswordValid = () =>{
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  isPasswordValid.value = regex.test(password.value);

}

//-----------------------------------------------------------
//点击登录
const login_click = () =>{
  checkusername();
  checkPasswordValid();
  console.log(isUsernameValid.value);
  if(!isUsernameValid.value){
    if(username.value==""){
      ElMessage.error('请输入用户名');
    }else{
      ElMessage.error('用户名错误，请重试');
    }
    
    username.value = "";
    usernameDom.value.focus();
  }else if(!isPasswordValid.value){

    if(password.value==""){
      ElMessage.error('请输入密码');
    }else{
      ElMessage.error('密码错误，请重试');
    }
    password.value = "";
    passwordDom.value.focus();
  }else{
    ElMessage({
    message: '登录成功.',
    type: 'success',
  })
  }
 
}

</script>

<template>
  <div class="background_login">
    <div id="login_box">
      <h1>LOGIN</h1>
      <div id="input_box">
        <input type="text" :placeholder="placeholder1" @focus="handleFocus1" @blur="handleBlur1"
          :class="{ 'input_focus': input_focus1 }"
          v-model="username"
          ref="usernameDom"
          >
      </div>
      <br>
      <div class="input_box">
        <input type="password" :placeholder="placeholder2" @focus="handleFocus2" @blur="handleBlur2"
          :class="{ 'input_focus': input_focus2 }"
          v-model="password"
          ref="passwordDom">
      </div>
      <div class="button-container">
        <button id="login_button" @click="login_click">登录</button>

        <button id="register_button"   ref="register_button">注册</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background_login {
  width: 100vw;
  height: 100vh;
  background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
  background-size: cover;
  flex: 1;
  position: relative;
}

/* 登录盒子样式 */
#login_box {

  width: 20vw;
  height: 30vh;
  background-color: #00000060;

  left: 35%;
  top: 20%;
  text-align: center;
  border-radius: 100px;
  padding: 100px 80px 100px 80px;
  position: absolute;
}

h1 {
  color: #ffffff90;
  margin-top: 0%;
  margin-bottom: 10%;
}

#input-box {
  margin-top: 5%;
}

span {
  color: #fff;
}

/* 输入框原本样式 */
input {
  border: 0;
  width: 75%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

/* 输入框聚焦后样式 */
.input_focus {
  border: 0;
  width: 85%;
  font-size: 20px;
  color: #ffffff;
  background: transparent;
  border-bottom: 2px solid #2989ca;
  padding: 5px 10px;
  outline: none;
  margin-top: 8px;
}

/* 登录按钮 */
#login_button {
  margin-top: 70px;
  width: 40%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}

.button-container {

  width: 75%;
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
}


#register_button {
  margin-top: 70px;
  width: 40%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}

#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #b94648;
}</style>
