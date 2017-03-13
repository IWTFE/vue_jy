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
        <el-form-item label="日志类型">
          <el-select v-model="form.roleStatus" placeholder="全部">
            <el-option v-for="item in options3" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="功能名称">
          <el-select v-model="form.roleStatus" placeholder="全部">
            <el-option v-for="item in options2" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作名称">
          <el-select v-model="form.roleStatus" placeholder="全部">
            <el-option v-for="item in options4" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作开始日期" prop="loginName">
          <el-date-picker v-model="form.beginDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="操作结束日期" prop="loginName">
          <el-date-picker v-model="form.endDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
          </el-date-picker>
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
            style="width: 100%">
            <el-table-column
              prop="iwoid"
              label="序号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="userId"
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
              prop="logTypeName"
              label="日志类型">
            </el-table-column>
            <el-table-column
              prop="functionName"
              label="功能名称">
            </el-table-column>
            <el-table-column
              prop="operateName"
              label="操作名称">
            </el-table-column>
            <el-table-column
              prop="oldRowJson"
              label="操作前数据">
            </el-table-column>
            <el-table-column
              prop="newRowJson"
              label="操作后数据">
            </el-table-column>
            <el-table-column
              prop="actionText"
              label="日志描述">
            </el-table-column>
            <el-table-column
              prop="startTime"
              label="操作开始时间">
            </el-table-column>
            <el-table-column
              prop="finishTime"
              label="操作结束时间">
            </el-table-column>
            <el-table-column
              prop="operateStatus"
              label="执行状态">
            </el-table-column>         
          </el-table>
      </section>
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
  export default {
    data() {
      return {
        form: {
          loginUserId:'',
          loginName:'',
          realName: '',
          roleOid: '',
          beginDate: '',
          endDate: '',
          logTypeOid: '',
          funcMuneOid: '',
          funcOptOid: ''        
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
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
          value: '无',
          label: '无'
        },
        {
          value: '具体功能列表',
          label: '具体功能列表'
        }],
        options3: [{
          value: '全部',
          label: '全部'
        }, 
        {
          value: '用户操作',
          label: '用户操作'
        },
        {
          value: '用户登录操作',
          label: '用户登录操作'
        },
        {
          value: '用户退出操作',
          label: '用户退出操作'
        }], 

        options4: [{
          value: '全部',
          label: '全部'
        }, 
        {
          value: '无',
          label: '无'
        },
        {
          value: '新建',
          label: '新建'
        },
        {
          value: '修改',
          label: '修改'
        },
        {
          value: '重置密码',
          label: '重置密码'
        },
        {
          value: '数据导出',
          label: '数据导出'
        },
        {
          value: '报表打印（暂无）',
          label: '报表打印（暂无）'
        }],                        
         tableData: [{
          iwoid:'1',
          userId: '刘丽',
          userName: '刘丽',
          roleName: '女',
          logTypeName: '25',
          functionName: '管理员',
          operateName: '研发',
          oldRowJson: '工程师',
          newRowJson: '13120082008',
          actionText: 'test@test.com',
          startTime: '2017-3-3 14:33:29',
          finishTime: '网红',
          operateStatus: '备注信息'
        },
        {
          iwoid:'1',
          userId: '刘丽',
          userName: '刘丽',
          roleName: '女',
          logTypeName: '25',
          functionName: '管理员',
          operateName: '研发',
          oldRowJson: '工程师',
          newRowJson: '13120082008',
          actionText: 'test@test.com',
          startTime: '2017-3-3 14:33:29',
          finishTime: '网红',
          operateStatus: '备注信息'
        },
        {
          iwoid:'1',
          userId: '刘丽',
          userName: '刘丽',
          roleName: '女',
          logTypeName: '25',
          functionName: '管理员',
          operateName: '研发',
          oldRowJson: '工程师',
          newRowJson: '13120082008',
          actionText: 'test@test.com',
          startTime: '2017-3-3 14:33:29',
          finishTime: '网红',
          operateStatus: '备注信息'
        }

        ]
      }
    },
    methods: {
      onQuery() {
        console.log('onQuery!')
      },
      onReset() {
        console.log('onReset!')
      }
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
