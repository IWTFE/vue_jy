<template>
  <div>
    <section class="popup-box">
      <el-form :inline="true" :rules="rules"  :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色代码" prop="loginName">
          <el-input type="text" v-model="ruleForm.roleId" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" prop="userName">
          <el-input type="text" v-model="ruleForm.roleName" auto-complete="off"></el-input>
        </el-form-item>
      <el-form-item label="角色级别" prop="email">
          <el-input type="text" v-model="ruleForm.roleLevel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="roleOid">
          <el-input type="text" v-model="ruleForm.roleStatus" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="remark">
          <el-input type="textarea" v-model="ruleForm.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input type="textarea" v-model="ruleForm.remark" auto-complete="off"></el-input>
        </el-form-item>        
      </el-form>
      <el-button type="danger" @click="submitForm('ruleForm')">新增/修改</el-button>
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
          loginUserId:'',
          roleId:'',
          roleName:'',
          roleLevel: '',
          description: '',
          roleStatus:'',
          remark: ''
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
        options2: [{
          value: '男',
          label: '男'
        }, 
        {
          value: '女',
          label: '女'
        }],
        options3: [{
          value: '全部',
          label: '全部'
        }, 
        {
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
          loginName: [
            { required: true, message: '登录名不能为空！', trigger: 'blur' },
            { min: 1, max: 20, message: '登录名应为1-20位长度的字母或数字！', trigger: 'blur' },
          ],
          userName: [
            { required: true, message: '真实姓名不能为空！', trigger: 'blur' },
            { min: 1, max: 20, message: '登录名应为1-20位长度的字母或数字,汉字！', trigger: 'blur' },
          ],
          gender: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ],
          age: [
            { required: true,min: 1, max: 2, message: '年龄应为大于0的整数！', trigger: 'blur' },
          ],
          department: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ],
          position: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ], 
          lineTel: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '联系电话应为7-18位数字或-！', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ],
          roleOid: [
            { required: true, message: '请请选择角色！', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ],
          status: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ],
          remark: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { min: 6, max: 10, message: '新密码长度应为6-10位。', trigger: 'blur' },
          ]                   
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) 
          {
            this.password=this.pass;
            if(confirm("确认新增？"))
            {
              this.$emit("update",this.ruleForm);
              alert("新增用户："+this.ruleForm.loginName+"成功！");
              this.$refs[formName].resetFields();
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
    width: 600px;
   }
</style>

