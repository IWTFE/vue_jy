<template >
<div>
  <div class="layer_mid border-box">
    <section class="layer-content output">

      <h1>
          <el-button type="danger" size="small" class="but-style" @click="submitAddUser = true" >创建角色</el-button>
        </h1>
    </section>
    <section class="table-info">
      <el-table :data="getTableData" highlight-current-row v-model="getTableData" border style="width: 100%" v-loading='listLoading'>
        <el-table-column prop="id" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="roleId" label="角色代码" sortable>
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称" sortable>
        </el-table-column>
        <el-table-column prop="roleLevel" label="角色级别" :formatter="formatLevel" sortable>
        </el-table-column>
        <el-table-column prop="description" label="角色描述" sortable>
        </el-table-column>
        <el-table-column prop="modifyTime" label="最后修改时间" sortable>
        </el-table-column>
        <el-table-column prop="modifier" label="最后修改人" sortable>
        </el-table-column>
        <el-table-column prop="roleStatus" label="状态" :formatter="formatStatus" sortable>
        </el-table-column>
        <el-table-column prop="remark" label="备注" sortable>
        </el-table-column>
        <el-table-column prop="reconFileName" label="操作">
        <template scope="scope">
        <el-button @click="modifyInfo_(scope.$index, scope.row)" type="text" size="small">修改</el-button>
        </template>
            </el-table-column>
          </el-table>
      </section>
      <div class="block pageer">
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="getPage.pageRows" :total="getPage.rowCount">
        </el-pagination>
      </div>
    </div>
    <el-dialog title="" v-model="submitAddUser" @close='handleDialogClose'>
      <v-adduser></v-adduser>
    </el-dialog>

    <el-dialog title="" v-model="editFormVisible" @close='handleDialogClose_'>
      <v-modifyIfo></v-modifyIfo>
    </el-dialog>

  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions,mapState } from 'vuex'
import {
  requestPowerUserList
} from '../../../api/api'
import adduser from 'src/components/dialog/createuser.vue'
import modifyInfo from 'src/components/dialog/modifyInfo.vue'
export default {
  data() {
    return {
      listLoading: false,
      submitAddUser: false,
      modifyInfo: false,
      editFormVisible:false,
      tableData: [],
      total:0,
      val: 1
}
},
  created() {
    this.addUserList_(1)
  },
  props: {
  close_: Boolean
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
    'getPage'
  ])
},
methods: {
    formatStatus:function (row,column) {
       return row.roleStatus === 0 ? '正常': row.roleStatus === 1 ? '冻结':row.roleStatus===2 ? '注销':'未知'
    },
    formatLevel:function (row,column) {
       return row.roleStatus === 0 ? '应用级别': row.roleStatus === 1 ? '管理级别':''
    },
    ...mapActions([
      'addUserList',
      'modifyInfo'
    ]),
    handleClick() {
      console.log('修改!')
    },
    handleDialogClose(){
       this.submitAddUser = false
    },
    handleDialogClose_(){
       this.editFormVisible = false
    },
    handleCurrentChange(val){
      //@分页触发方法
      console.log('page')
      console.log(val)
      this.val = val;
      this.addUserList_(this.val)

    },
    addUserList_(val){
      var that = this
      this.params= {
        "body": {
            "loginUserId": "admin",
            "page": {
              "currPage": 0,
              "end": 0,
              "goPage":val,
              "pageCount": 0,
              "pageRows": 10,
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
      this.addUserList(this.params);
    },
    modifyInfo_(index,row){
      this.editFormVisible= true
      this.ModifyInfo.roleId = row.roleId
      this.ModifyInfo.iwoid = row.iwoid
      this.ModifyInfo.roleName=row.roleName
      this.ModifyInfo.roleLevel=row.roleLevel
      this.ModifyInfo.description=row.description
      this.ModifyInfo.remark=row.remark
      this.ModifyInfo.roleStatus=row.roleStatus
    }
  },
  components: {
    'v-adduser': adduser,
    'v-modifyIfo':modifyInfo
  }
}
</script>

<style>
/* custom style */

.border-box {
  border: 1px solid #ddd;
  background-color: white;
}

.layer-init {
  margin: 20px;
  padding: 20px 10px 0 10px;
}

.layer_mid {
  margin: 20px;
  padding: 0 20px 20px 20px;
}

.layer-init .el-row,
.layer_mid .el-row {
  margin-left: 0!important;
  margin-right: 0!important;
}

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

.query {
  font-size: 12px;
}

.pageer {
  text-align: center!important;
  margin-top: 20px;
}

.el-select {
  width: 175px;
}

.tc {
  text-align: center;
}

.but-style {
  margin-top: 10px;
  margin-left: 0;
}


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
