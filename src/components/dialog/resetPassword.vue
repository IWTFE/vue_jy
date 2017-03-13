<template>
  <div>
    <section class="popup-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="登录名" prop="loginUserId">
          {{this.loginname}}
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
       <el-form-item label="确认新密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')">重置密码</el-button>
        </el-form-item>
      </el-form>
    </section>
 </div>
</template>

<script>
  export default {
    props:['loginname'],
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
        var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          loginUserId:this.loginname,
          pass: '',
          checkPass: '',
          newPassword:''
        },
         level: [{
          value: '管理级别',
          label: '管理级别'
        }, 
        {
          value: '应用级别',
          label: '应用级别'
        }],
        options: [{
          value: '正常',
          label: '正常'
        }, 
        {
          value: '冻结',
          label: '冻结'
        }, 
        {
          value: '注销',
          label: '注销'
        }],
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        
        this.$refs[formName].validate((valid) => {
          if (valid) 
          {
            if(confirm("确认修改？"))
            {
              alert('submit!');
              this.$emit("close");
              this.$refs[formName].resetFields();
              alert("重置密码成功！");
            }

          } 
          else 
          {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .output h1{
    border-bottom: 1px solid #d43d42;
    text-align: left;
    line-height: 1.5;
    margin-top:10px; 
  }
   .span_h1{
    color: white;
    background-color: #d43d42;
    border-radius: 5px 5px 0 0;
    display: inline;
    padding: 10px 15px;
    font-size: 14px;
   }
   .el-select{
      width: 100%;
   }
   .popup-box{
    padding: 10px 40px 10px 25px
   }
   .el-input__inner{
    width:200px;
   }
   .popup-box{
    width: 400px;
   }
</style>

