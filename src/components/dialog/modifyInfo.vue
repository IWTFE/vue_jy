<template>
<div>
  <div class="layer-content output">
    <h1>
        <span class="span_h1">修改角色</span>
      </h1>
  </div>
  <section class="popup-box">
    <el-form :model="getModifyInfo" :rules="rules" ref="getModifyInfo" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色代码" prop="roleId">
        <el-input v-model="getModifyInfo.roleId"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="getModifyInfo.roleName"></el-input>
      </el-form-item>
      <el-form-item label="角色级别" prop="roleLevel">
        <el-select v-model.number="getModifyInfo.roleLevel" placeholder="选择角色级别">
          <el-option v-for="item in level" :label="item.label" :value="item.value" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="roleStatus">
        <el-select v-model="getModifyInfo.roleStatus" placeholder="请选择活动区域">
          <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色描述" prop="description">
        <el-input type="textarea" v-model="getModifyInfo.description"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" v-model="getModifyInfo.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="modifyInfoClick">修改</el-button>
        <el-button type="danger" @click="resetForm('getModifyInfo')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import {
  requestPowerCreateUser
} from '../../api/api'
export default {
  data() {
    return {
      params_:{},
      level: [{
          value: 1,
          label: '管理级别'
        },
        {
          value: 0,
          label: '应用级别'
        }
      ],
      options: [{
          value:0,
          label: '正常'
        },
        {
          value: 1,
          label: '冻结'
        },
        {
          value: 2,
          label: '注销'
        }
      ],
      rules: {
        roleId: [{
            required: true,
            message: '角色代码应为1-20位长度的字母或数字',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }
        ],
        roleName: [{
            required: true,
            message: '角色名称不能为空',
            trigger: 'blur'
          },
          {
            min: 1,
            max: 20,
            message: '长度在 1 到 20 个字符',
            trigger: 'blur'
          }
           ],
        roleLevel: [{
          required: true,
          message: '请选择角色级别!',
          trigger: 'change',
          type:'number'
        }]
      }
    };
  },
  created () {
    //this.localSuccess = this.getSuccess
    alert(this.ModifyInfo.roleName)
    console.log(this.$parent)
  },
  computed: {
    ...mapState([
      'paramsStore',
      'ModifyInfo'
    ]),
    ...mapGetters([
      'getlist',
      'getTableData',
      'getSuccess',
      'getModifyInfo',
      'getmodifMessage'

    ])
  },
  methods: {
    test() {
      alert('aa')
    },
    ...mapActions([
      'addUserList',
      'createUser',
      'modifyInfo',
      'getchangeCode'
    ]),
    addUser() {
      this.submitForm('ruleForm');
    },
    submitForm(getModifyInfo) {
      this.$refs[getModifyInfo].validate((valid) => {
        if (valid) {
          alert(typeof(this.getModifyInfo.roleId))
          this.createUser()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(getModifyInfo) {
      this.$refs[getModifyInfo].resetFields();
    },
    modifyInfoClick() {
      var that = this
        console.log(that.$parent.$emit('close',false))
      this.params_ = {
          "body": {
            "loginUserId": "admin",
            'iwoid': this.getModifyInfo.iwoid,
            "roleId": this.getModifyInfo.roleId, //ruleForm.roleId
            "roleName": this.getModifyInfo.roleName,
            "roleLevel": this.getModifyInfo.roleLevel,
            "description": this.getModifyInfo.description,
            "remark": this.getModifyInfo.remark,
            "roleStatus": this.getModifyInfo.roleStatus,
          },
          "head": {
            "businessId": "FS_U_ROLE",
            "deviceId": "123456789123456789123456789",
            "requestId": "qwertyuiopasdfghjkzxcvbnm",
            "signature": "null"
          }
        }
        this.modifyInfo(this.params_).then(()=>{

             if(this.getmodifMessage.message=== true){
               alert("tiaodaolema")
               this.$notify.success({
                 title: '成功！',
                 message: '修改成功!'
               });

                // that.resetForm('getModifyInfo')
                this.params= {
                "body": {
                    "loginUserId": "admin",
                    "page": {
                      "currPage": 0,
                      "end": 100,
                      "goPage": 1,
                      "pageCount": 0,
                      "pageRows": 100,
                      "rowCount": 0,
                      "start": 0
                    }
                  },
                  "head": {
                    "businessId": "FS_R_ROLE",
                    "deviceId": "123456789123456789123456789",
                    "requestId": "qwertyuiopasdfghjkzxcvbnm",
                    "signature": "null"
                  }
              }
              this.addUserList(this.params)
              //this.$parent.$emit('update',this.params);
            }else{
              console.log(this.getchangeCode(this.getmodifMessage.code))
              this.$notify.error({
         title: '错误',
         message: "系统错误！"

       });

             }
        })
      },
      watch: {
        // localSuccess:'test'
      }
    }
  }
</script>

<style scoped>
.output h1 {
  border-bottom: 1px solid #d43d42;
  text-align: left;
  line-height: 1.5;
  margin-top: 10px;
}

.span_h1 {
  color: white;
  background-color: #d43d42;
  border-radius: 5px 5px 0 0;
  display: inline;
  padding: 10px 15px;
  font-size: 14px;
}

.el-select {
  width: 100%;
}

.popup-box {
  padding: 10px 40px 10px 25px
}
</style>
