<template>
  <div>
    <div class="layer_mid border-box">
      <section class="layer-content output">
       <h1>
          <el-button type="danger" size="small" class="but-style" @click="submitAddUser = true">创建角色</el-button>
        </h1>
      </section>
      <section class="table-info">
        <el-table
            :data="tableData"
            border
            style="100%" @cell-click="cellClick">
            <el-table-column
              prop="iwoid"
              label="序号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="roleId"
              label="角色代码">
            </el-table-column>
            <el-table-column
              prop="roleName"
              label="角色名称">
            </el-table-column>
            <el-table-column
              prop="roleLevel"
              label="角色级别">
            </el-table-column>
            <el-table-column
              prop="description"
              label="角色描述">
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
              prop="roleStatus"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="备注">
            </el-table-column>
            <el-table-column
              label="操作">
              <template scope="scope">
                      <el-button @click="handleClick" type="text" size="small">修改</el-button>
                    </template>
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
    <el-dialog title="" v-model="submitAddUser"  >
      <v-addRole @update="update"></v-addRole>
    </el-dialog>
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
          roleId: '1',
          roleName: '管理员',
          roleLevel: '1',
          description: '描述',
          modifyTime: '2017-3-3 14:33:29',
          modifier: '网红',
          roleStatus: '正常',
          remark: '备注信息',
        },
         {
          iwoid: '2',
          roleId: '1',
          roleName: '管理员',
          roleLevel: '1',
          description: '描述',
          modifyTime: '2017-3-3 14:33:29',
          modifier: '网红',
          roleStatus: '正常',
          remark: '备注信息',
        },
         {
          iwoid: '3',
          roleId: '1',
          roleName: '管理员',
          roleLevel: '1',
          description: '描述',
          modifyTime: '2017-3-3 14:33:29',
          modifier: '网红',
          roleStatus: '注销',
          remark: '备注信息',
        }        
      ]
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },
  
      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      size: {
        type: String,
        default: 'small'
      },

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: '15%'
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
  }
  .layer-init{
    margin: 20px;
    padding: 20px 10px 0 10px;  
  }
  .layer_mid{
    margin: 20px;
    padding: 0 20px 20px 20px;
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
