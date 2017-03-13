<template>
  <div>
    <div class="layer-init border-box">
      <el-form :inline="true" :model="form" class="demo-form-inline" label-width="110px">
       <el-form-item label="登录名" prop="loginName">
          <el-input v-model="form.loginName"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="userName">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.roleName" placeholder="全部">
            <el-option v-for="item in options1" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.roleStatus" placeholder="全部">
            <el-option v-for="item in options3" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="onQuery">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="layer_mid border-box">
      <section class="layer-content output">
        <h1>
          <el-button type="primary" size="small" style="float:right; margin-top:10px;">导出excel</el-button>
          <span class="span_h1">查询结果</span>
        </h1>
      </section>
      <section class="table-info">
        <el-table
            :data="tableData"
            border
            style="" @cell-click="cellClick">
            <el-table-column
              prop="iwoid"
              label="序号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="loginName"
              label="登录名">
            </el-table-column>
            <el-table-column
              prop="userName"
              label="真实姓名">
            </el-table-column>
            <el-table-column
              prop="roleName"
              label="角色">
            </el-table-column>
            <el-table-column
              prop="department"
              label="部门">
            </el-table-column>
            <el-table-column
              prop="position"
              label="职务">
            </el-table-column>
            <el-table-column
              prop="modifyTime"
              label="最后修改时间">
            </el-table-column>
            <el-table-column
              prop="modifier"
              label="最后修改人">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column
              prop=""
              label="操作">
                    <template scope="scope">
                      <el-button type="text" size="small" >重置密码</el-button>
                    </template>
            </el-table-column>            
          </el-table>
      </section>
    <el-dialog title="" v-model="resetPass"  size="tiny" >
      <v-resetPassword v-on:close="resetPass=false" v-bind:loginname="loginname"></v-resetPassword>
    </el-dialog>
      <div class="block pageer">
        <el-pagination
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import resetPassword from 'src/components/dialog/resetPassword.vue'
  export default {
    data() {
      return {
        resetPass:false,
        loginname:'',
        form: {
          loginName:'',
          userName:'',
          loginUserId: '',
          roleName: '',
          roleLevel: '',
          roleStatus: '',
        },
         info:{
          betUserName: '西山易冷',
          idCardNo: '1305231979051****3',
          accountId: '55515151451'
        },
        options1: [{
          value: '全部',
          label: '全部'
        }, 
        {
          value: '具体列表',
          label: '具体列表'
        }],
        options2: [{
          value: '全部',
          label: '全部'
        }, 
        {
          value: '管理级别',
          label: '管理级别'
        },
        {
          value: '应用级别',
          label: '应用级别'
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
         tableData: [{
          iwoid: '1',
          loginName: '刘丽',
          userName: '刘丽',
          gender: '女',
          age: '25',
          roleName: '管理员',
          department: '研发',
          position: '工程师',
          lineTel: '13120082008',
          email: 'test@test.com',
          modifyTime: '2017-3-3 14:33:29',
          modifier: '网红',
          status: '正常',
          remark: '备注信息',
        },
        {
          iwoid: '2',
          loginName: '网络',
          userName: '刘丽',
          gender: '女',
          age: '25',
          roleName: '管理员',
          department: '研发',
          position: '工程师',
          lineTel: '13120082008',
          email: 'test@test.com',
          modifyTime: '2017-3-3 14:33:29',
          modifier: '网红',
          status: '注销',
          remark: '备注信息',
        },
        {
          iwoid: '3',
          loginName: '测试',
          userName: '刘丽',
          gender: '女',
          age: '25',
          roleName: '管理员',
          department: '研发',
          position: '工程师',
          lineTel: '13120082008',
          email: 'test@test.com',
          modifyTime: '2017-3-3 14:33:29',
          modifier: '网红',
          status: '正常',
          remark: '备注信息',
        }]
      }
    },
    methods: {
      onQuery() {
        console.log('onQuery!')
      },
      onReset() {
        console.log('onReset!')
      },
      cellClick(row, column, cell, event){
        if(row.status=="注销"){return;}
        this.loginname=row.loginName;
        this.resetPass=true;
        //console.log(this.loginname);
      }
    },
    components: {    
       'v-resetPassword': resetPassword
     }
  }
</script>

<style scoped>
/* custom style */
  .border-box{
    border: 1px solid #ddd; 
    background-color: white;
  }
  .layer-init{
    margin: 20px;
    padding: 20px 10px 0 10px;  
  }
  .layer_mid{
    margin: 20px;
    padding: 0 20px 20px 20px;
  }
  .layer-content{
    width: 100%;
  }
  .layer-init .el-row, .layer_mid .el-row{
    margin-left: 0!important;
    margin-right: 0!important; 
  }
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
   .query{
    font-size:12px;
   }
  .pageer{
    text-align: center!important;
    margin-top:20px;
  }
  .el-select{
    width: 175px;
  }
  /* element ui style */
  .el-row { 
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .block {
    text-align: left;
 }
</style>
