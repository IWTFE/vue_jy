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
      <section class="layer-content output query">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content">投注账号：{{info.accountId}}</div></el-col>
          <el-col :span="6"><div class="grid-content">彩民姓名：{{info.betUserName}}</div></el-col>
          <el-col :span="6"><div class="grid-content">身份证号：{{info.idCardNo}}</div></el-col>
          <el-col :span="6"><div class="grid-content">银行卡归宿地：{{info.bankCardRegion}}</div></el-col>
          <el-col :span="6"><div class="grid-content">关联银行卡号：{{info.bankCardNo}}</div></el-col>
          <el-col :span="6"><div class="grid-content">预留手机号：{{info.telephone}}</div></el-col>
          <el-col :span="6"><div class="grid-content">首次开户时间：{{info.firstBetCreateTime}}</div></el-col>
          <el-col :span="6"><div class="grid-content">账户状态：{{info.accountState}}</div></el-col>
        </el-row>
      </section>
      <section class="table-info">
        <el-table :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="tradingSystem"
              label="交易系统">
            </el-table-column>
            <el-table-column
              prop="betUserId"
              label="投注账号">
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间">
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
</template>

<script>
  export default {
    data() {
      return {
        form: {
          betUserId: '',
          accountId: '',
          idCardNo: '',
          telephone: ''
        },
        info:{
          accountId: '62261234567890123456',
          betUserName: '西山易冷',
          idCardNo: '长沙',
          bankCardRegion: '1305231979051****3',
          bankCardNo: '6222***********5702',
          telephone: '1395****514',
          firstBetCreateTime: '2017-2-28 14:11:34',
          accountState: '正常',
          accountBalance: '',
          betInfoList: ''
        },
         tableData: [{
          tradingSystem: '积分换彩',
          betUserId: '62261234567890123456',
          createTime: '2017-2-28 14:28:13'
        }, {
          tradingSystem: '积分换彩',
          betUserId: '62261234567890123456',
          createTime: '2017-2-28 14:28:13'
        }, {
          tradingSystem: '积分换彩',
          betUserId: '62261234567890123456',
          createTime: '2017-2-28 14:28:13'
        }, {
          tradingSystem: '积分换彩',
          betUserId: '62261234567890123456',
          createTime: '2017-2-28 14:28:13'
        }, {
          tradingSystem: '积分换彩',
          betUserId: '62261234567890123456',
          createTime: '2017-2-28 14:28:13'
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
