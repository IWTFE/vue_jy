<template>
  <div>
    <div class="layer-content output">
      <h1>
        <span class="span_h1">创建角色</span>
      </h1>
    </div>
    <section class="popup-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色代码" prop="roleId">
          <el-input v-model="ruleForm.roleId"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色级别"  prop="roleLevel">
          <el-select v-model="ruleForm.roleLevel" placeholder="选择角色级别">
            <el-option v-for="item in level" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="ruleForm.roleStatus" placeholder="请选择活动区域">
            <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')">添加</el-button>
          <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
 </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          loginUserId: '',
          roleId: '',
          roleName: '',
          roleLevel: '',
          description: '',
          remark: '',
          roleStatus: ''
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
          roleId: [
            { required: true, message: '角色代码应为1-20位长度的字母或数字', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          roleName: [
            { required: true, message: '角色名称不能为空', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          roleLevel: [
            { required: true, message: '请选择角色级别！', trigger: 'change' }
          ]}
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
</style>
