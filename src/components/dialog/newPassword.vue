<template>
  <div>
    <section class="popup-box">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="旧密码" prop="pwd">
          <el-input type="password" v-model="ruleForm2.pwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm2')">修改</el-button>
          <el-button type="danger" @click="resetForm('ruleForm2')">重写</el-button>
        </el-form-item>
      </el-form>
    </section>
 </div>
</template>

<script>
 export default {
    data() {
      var validatePass = (rule, value, callback) => {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
      };
      var validatePass2 = (rule, value, callback) => {
        if (value !== this.ruleForm2.pass) {
          callback(new Error('您两次输入的新密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pwd:'',
          pass: '',
          checkPass: ''
        },
        rules2: {
          pwd: [
            { required: true, message: '请输入旧密码', trigger: 'blur' },
            { min: 6, max: 10, message: '旧密码长度应为6-10位。', trigger: 'blur' }
          ],
          pass: [ 
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请再次输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '确认新密码长度应为6-10位。', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$refs[formName].resetFields();
          } else {
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

