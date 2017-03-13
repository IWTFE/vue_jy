<template>
  <div>
    <div class="layer-init border-box">
      <el-form :inline="true" :model="form" class="demo-form-inline" label-width="110px">
        <el-form-item label="投注账号">
          <el-input v-model="form.betUserId"></el-input>
        </el-form-item>
        <el-form-item label="投注资金账号">
          <el-input v-model="form.accountId"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idCardNo"></el-input>
        </el-form-item>
        <el-form-item label="银行预留手机号">
          <el-input v-model="form.telephone"></el-input>
        </el-form-item>
        <el-form-item label="账户状态">
          <el-select v-model="form.accountState" placeholder="全部">
            <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="onQuery">查询</el-button>
          <el-button type="danger" @click="onReset">重置</el-button>
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
              prop="id"
              label="序号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="accountId"
              label="投注资金账号">
            </el-table-column>
            <el-table-column
              prop="betUserId"
              label="投注账户">
            </el-table-column>
            <el-table-column
              prop="betUserName"
              label="彩民姓名">
            </el-table-column>
            <el-table-column
              prop="idCardNo"
              label="身份证号">
            </el-table-column>
            <el-table-column
              prop="accountState"
              label="当前账号状态">
            </el-table-column>
            <el-table-column
              prop="actionType"
              label="操作">
            </el-table-column>
            <el-table-column
              prop="reasonDesc"
              label="原因描述">
            </el-table-column>
            <el-table-column
              prop="modifier"
              label="最后修改人">
            </el-table-column>
            <el-table-column
              prop="modifyTime"
              label="最后修改时间">
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
          betUserId: '',
          accountId: '',
          idCardNo: '',
          telephone: '',
          accountState: '',
        },
        options: [{
          value: 'whole',
          label: '全部'
        },
        {
          value: 'normal',
          label: '正常'
        },
        {
          value: 'freeze',
          label: '冻结'
        }],
         tableData: [{
          id: '1',
          accountId: '62261234567890123456',
          betUserId: '32845555(积分换彩),3284635151(电话投注)',
          betUserName: '张冬梅',
          idCardNo: '231025198701142648',
          accountState: '正常',
          actionType: '冻结',
          reasonDesc: '账户挂失',
          modifier: 'bisb',
          modifyTime: '2016-2-28 14:28:13'
        }, 
        {
          id: '2',
          accountId: '62261234567890123456',
          betUserId: '32845555(积分换彩),3284635151(电话投注)',
          betUserName: '张冬梅',
          idCardNo: '231025198701142648',
          accountState: '正常',
          actionType: '冻结',
          reasonDesc: '账户挂失',
          modifier: 'bisb',
          modifyTime: '2016-2-28 14:28:13'
        },
        {
          id: '3',
          accountId: '62261234567890123456',
          betUserId: '32845555(积分换彩),3284635151(电话投注)',
          betUserName: '张冬梅',
          idCardNo: '231025198701142648',
          accountState: '正常',
          actionType: '冻结',
          reasonDesc: '账户挂失',
          modifier: 'bisb',
          modifyTime: '2016-2-28 14:28:13'
        },
        {
          id: '4',
          accountId: '62261234567890123456',
          betUserId: '32845555(积分换彩),3284635151(电话投注)',
          betUserName: '张冬梅',
          idCardNo: '231025198701142648',
          accountState: '正常',
          actionType: '冻结',
          reasonDesc: '账户挂失',
          modifier: 'bisb',
          modifyTime: '2016-2-28 14:28:13'
        }, 
        {
          id: '5',
          accountId: '62261234567890123456',
          betUserId: '32845555(积分换彩),3284635151(电话投注)',
          betUserName: '张冬梅',
          idCardNo: '231025198701142648',
          accountState: '正常',
          actionType: '冻结',
          reasonDesc: '账户挂失',
          modifier: 'bisb',
          modifyTime: '2016-2-28 14:28:13'
        }]
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
