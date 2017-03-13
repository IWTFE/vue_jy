<template>
<div>
  <div class="layer_mid border-box">
    <section class="layer-content output">
      <h1>
          <el-button type="danger" size="small" class="but-style" @click="submitAddUser = true">创建角色</el-button>
        </h1>
    </section>
    <section class="table-info">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="iwoid" label="序号" width="80">
        </el-table-column>
        <el-table-column prop="roleId" label="角色代码">
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称">
        </el-table-column>
        <el-table-column prop="roleLevel" label="角色级别">
        </el-table-column>
        <el-table-column prop="description" label="角色描述">
        </el-table-column>
        <el-table-column prop="modifyTime" label="最后修改时间">
        </el-table-column>
        <el-table-column prop="modifier" label="最后修改人">
        </el-table-column>
        <el-table-column prop="roleStatus" label="状态">
        </el-table-column>
        <el-table-column prop="remark" label="备注">
        </el-table-column>
        <el-table-column prop="reconFileName" label="操作">
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
      <v-adduser></v-adduser>
    </el-dialog>

  </div>
</template>

<script>
// import axios from 'axios'
import {
  requestPowerUserList

} from '../../../api/api'
import adduser from 'src/components/dialog/adduser.vue'
export default {
  data() {
    return {
      submitAddUser: false,
      tableData: [{
        iwoid: '',
        roleId: '',
        roleName: '',
        roleLevel: '',
        description: '',
        modifier: '',
        modifyTime: '',
        roleStatus: '',
        remark: ''
      }]
    }
  },
  created() {
    this.addUserList()
  },
  methods: {
    handleClick() {
      console.log('修改!')
    },
    addUserList() {
      var that = this
      var verifyParams = {
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
      requestPowerUserList(verifyParams).then(function(response) {
        // console.log('susu111')
        console.log(response.body.dateList)
        that.tableData = response.body.dateList
        // console.log(that.tableData)
      }).catch(function(error) {
        console.log(error)
      })
    }
  },
  components: {
    'v-adduser': adduser
  }
}
</script>

<style
>
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
