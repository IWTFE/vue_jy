<template>
<div class="loginDiv">
  <div class='loginIner'>
    <!--logo start-->
    <div class='logoDiv'>
      <div class="logo_img"><img src='../../src/images/logo.png'></div>
      <div class="logo_word"><span>| 投注资金账户服务系统</span></div>
    </div>
    <!--logo over-->
    <div class='content'>
      <div class='bg_img'>
        <img src='../../src/images/login.png'>
      </div>
      <div class='login_form'>
        <p class='login_title'>账户登录 </p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item label="" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="" prop="psw">
            <el-input v-model="ruleForm.psw"></el-input>
          </el-form-item>
          <el-form-item label="" prop="identify" class="identifyItem">
            <el-input v-model="ruleForm.identify" type='text' placeholder="验证码" class='identify'></el-input>
            <div class='identifyImg'><img :src=src />{{ruleForm.identify}}</div>
            <a href='javascript:;' @click="verifyCode1" class="clickCode">看不清？换一张</a>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click='login1' class='loginBtn'>登录</el-button>
            <el-button type="primary" @click='loginOut' class='loginBtn'><router-link to='/'>退出</router-link></el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import {
  requestVerifyCode, requestLogin, requestLoginOut
} from '../api/api';
export default {
  name: 'hello',
  data() {
    return {
      src: '',
      sessionId:'',
      ruleForm: {
        name: '',
        identify: '',
        psw: ''
      },
      rules: {
        name: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        psw: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 10,
            message: '密码应为6-10位,且至少包含大写字母、小写字母、数字,符号中的2种！',
            trigger: 'blur'
          }
        ],
        identify: [{
          min: 4,
          max: 4,
          message: '验证码必须是4位!',
          trigger: 'blur'
        }]
      }
    }
  },
  created() {
     this.verifyCode1()
  },
  methods: {
    timeStamp () {
      return (new Date().getTime().toString())
    },
    verifyCode() {
      var that = this
      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post('/api/fundSystemManage-agent/user/verifyCode', {
        body: {},
        head: {
          businessId: 'FS_VERIFYCODE',
          deviceId: '123456789123456789123456789',
          requestId: new Date().getTime().toString(),
          signature: null
        }
      }).then(function(response) {
        console.log(data.body.validateCodeImg)
        that.src = 'data:image/png;base64,'
        that.src = that.src + data.body.validateCodeImg
        that.sessionId = data.body.sessionId

      }).catch(function(error) {
        console.log(error)
      })
    },
    verifyCode1() {
        var that = this
      var verifyParams ={
        body: {},
        head: {
          businessId: 'FS_VERIFYCODE',
          deviceId: '123456789123456789123456789',
          requestId: 'qwertyuiopasdfghjkzxcvbnm',
          signature: null
        }
      }
      requestVerifyCode(verifyParams).then(data => {
        console.log(data.head.result + 'susu')
        if(data.head.result!=0){
          this.$notify({
                 title: data.head.message,
                 message: data.head.message,
                 type: 'error'
               });
        } else {
          // console.log(data)
          // console.log(data.body.validateCodeImg)
          // console.log(data.body.sessionId)
          that.src = 'data:image/png;base64,'
          that.src = that.src + data.body.validateCodeImg
          that.sessionId = data.body.sessionId


        }
      })
    },
    login() {
      var that = this
      // console.log(this.ruleForm.identify)
      axios.post('/api/fundSystemManage-agent/user/login', {
        body: {
          sessionId:that.sessionId,
          userId:'admin', //this.ruleForm.name
          loginPwd:'A00000', //this.ruleForm.psw
          validateCode:this.ruleForm.identify //k6cb
        },
        head: {
          businessId: 'FS_LOGIN',
          deviceId: '123456789123456789123456789',
          requestId: 'qwertyuiopasdfghjkzxcvbnm', // new Date().getTime().toString(), //qwertyuiopasdfghjkzxcvbnm
          signature: null
        }
      }).then(function(response) {
        // console.log(response)
        // console.log(response.data.head.result)
      }).catch(function(error) {
        // console.log(error)
      })
    },
    login1() {
      var that = this
      var verifyParams ={
        body: {
          sessionId:that.sessionId,
          userId:'admin',
          loginPwd:'A00000',
          validateCode:this.ruleForm.identify //k6cb
        },
        head: {
          businessId: 'FS_LOGIN',
          deviceId: '123456789123456789123456789',
          requestId:'qwertyuiopasdfghjkzxcvbnm',
          signature: null
        }
      }
      requestLogin(verifyParams).then(data => {
        //console.log(data.head.result)
        //console.log(code)
        if(data.head.result!==0){
          this.$notify({
                 title: '消息！',
                 message: data.head.message,
                 type: 'error'
               });
        } else {
          //console.log(data)
          // 跳转到home页
          // console.log(data.body)
          this.$router.push({ path: '/' });
          sessionStorage.setItem('user', JSON.stringify(data.body));
          //this.$router.push({ path: '/' });
          // 登陆后给菜单列表处
        }
      })
    },
    loginOut() {
      var verifyParams ={
        body: {
          loginUserId:'admin'
        },
        head: {
          businessId: 'FS_LOGOUT',
          deviceId: '123456789123456789123456789',
          requestId:'qwertyuiopasdfghjkzxcvbnm',
          signature: null
        }
      }
      requestLoginOut(verifyParams).then(data => {
        console.log(data.head.result)
        //console.log(code)
        if(data.head.result!==0){
          this.$notify({
                 title: '消息！',
                 message: data.head.message,
                 type: 'error'
               });
        } else {
          console.log(data)
          // 跳转到home页
          // sessionStorage.setItem('user', JSON.stringify(user));
          //this.$router.push({ path: '/' });
          // 登陆后给菜单列表处
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginDiv {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url('../../src/images/line.png') repeat-x center 150px;
}

.loginIner {
  margin: auto;
  width: 1000px;
  position: absolute;
  left: 50%;
  margin-left: -500px;
  overflow: hidden;
  height: 100%;
}

.logoDiv {
  position: absolute;
  top: 150px;
}

.logoDiv .logo_img {
  display: inline-block;
  float: left;
}

.logoDiv .logo_word {
  float: left;
  line-height: 46px;
  font-family: '微软雅黑';
  font-size: 18px;
  color: #000;
  padding: 0 0 0 5px;
}

.content {
  position: absolute;
  left: 0;
  top: 350px;
}

.bg_img {
  float: left;
}

.login_form {
  float: left;
  width: 370px;
  height: 430px;
  background-color: #fff;
  border-radius: 8px;
}

.login_title {
  text-align: left;
  padding: 0 0 20px 40px;
  color: #333;
  font-family: '微软雅黑';
  font-size: 18px;
  margin-top: 36px;
}

.demo-ruleForm {
  padding: 0 38px;
}

.identify {
  float: left;
  width: 100px;
}


/*.identifyItem{margin-top:40px;}*/

.demo-ruleForm .el-form-item__error {
  text-align: left;
}

.identifyImg {
  float: left;
  margin: 0 5px;
}
.clickCode{color:#97a8be;text-decoration: none;}
.loginBtn{width:100%;background:#d83e46;border:0;height:40px;}
.loginBtn:hover{background:#e94d5b;border:0;height:40px;}
</style>
