<template>
  <div>
    <div class="layer_mid border-box">
      <section class="table-info">
        <el-table
            :data="tableData"
            border
            style="100px" @cell-click="cellClick">
            <el-table-column
              prop="roleName"
              label="角色列表">
            </el-table-column>
          </el-table>
      </section>
    </div>
    <div class="layer_mid2 border-box">
      <section class="table-info">
        <el-tree
          :data="data2"
          show-checkbox
          node-key="id"
          :props="defaultProps">
        </el-tree>
      </section>
    </div>
  </div>
</template>

<script>
  import addRole from 'src/components/dialog/addRole.vue'
  export default {
    data() {
      return {
         submitAddUser: false,
         editUser:false,
         tableData: [
         {
          iwoid: '1',
          roleName: '角色名称1',
          },
         {
          iwoid: '2',
          roleName: '角色名称2',
          },
         {
          iwoid: '3',
          roleName: '角色名称3',
          },
         {
          iwoid: '4',
          roleName: '角色名称4',
          },
         {
          iwoid: '5',
          roleName: '角色名称5',
          }
      ],
data2: [{
          id: 1,
          label: '权限列表',
          children: [{
            id: 4,
            label: '系统管理',
            children: [{
              id: 9,
              label: '系统用户管理',
              children: [
                {
                  id: 9,
                  label: '角色管理'
                }, 
                {
                  id: 10,
                  label: '角色权限查询'
                }]
            }, 
            {
              id: 10,
              label: '日志管理',
              children: [
                {
                  id: 9,
                  label: '系统用户操作日志'
                }, 
                {
                  id: 10,
                  label: '系统处理日志'
                }]
            }]
          },
{
            id: 4,
            label: '业务管理',
            children: [{
              id: 9,
              label: '系统用户管理',
              children: [
                {
                  id: 9,
                  label: '角色管理'
                }, 
                {
                  id: 10,
                  label: '角色权限查询'
                }]
            }, 
            {
              id: 10,
              label: '日志管理',
              children: [
                {
                  id: 9,
                  label: '系统用户操作日志'
                }, 
                {
                  id: 10,
                  label: '系统处理日志'
                }]
            }]
          },

          {
            id: 4,
            label: '业务监控',
            children: [{
              id: 9,
              label: '系统用户管理',
              children: [
                {
                  id: 9,
                  label: '角色管理'
                }, 
                {
                  id: 10,
                  label: '角色权限查询'
                }]
            }, 
            {
              id: 10,
              label: '日志管理',
              children: [
                {
                  id: 9,
                  label: '系统用户操作日志'
                }, 
                {
                  id: 10,
                  label: '系统处理日志'
                }]
            }]
          }
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleClick() {
      	console.log('修改!');
        this.submitAddUser = true;
      },
      update(form){
        this.tableData.push(JSON.parse(JSON.stringify(form)));
        this.submitAddUser=false;
      },
      cellClick(row, column, cell, event){
        if(row.status=="注销"){return;}
        //this.loginname=row.loginName;
        this.editUser=true;
        //console.log(this.loginname);
      }
    },
     components: {    
       'v-addRole': addRole
     }
  }
</script>

<style scoped>
/* custom style */
  .border-box{
    border: 1px solid #ddd; 
    background-color: white;
    float: left;
  }
  .layer-init{
    margin: 20px;
    padding: 20px 10px 0 10px;  
  }
  .layer_mid{
    margin: 20px;
    padding: 0;
    width: 120px;
  }
  .layer_mid2{
    margin: 20px;
    padding: 0;
    width: 300px;
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
  .tc{
    text-align: center;
  }
  .but-style { margin-top:10px; margin-left:0;  }
  /*.padding-init{
    padding: 0 10px;
  }*/
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
