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
        <el-form-item label="交易类型">
          <el-select v-model="form.tradingType" placeholder="全部">
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
      <section class="layer-content output query">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content">姓名：{{info.betUserName}}</div></el-col>
          <el-col :span="6"><div class="grid-content">身份证号{{info.idCardNo}}</div></el-col>
          <el-col :span="6"><div class="grid-content">投注资金账号：{{info.accountId}}</div></el-col>
        </el-row>
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
              prop="serialNo"
              label="系统流水号">
            </el-table-column>
            <el-table-column
              prop="orderId"
              label="交易订单号">
            </el-table-column>
            <el-table-column
              prop="bankSerialNo"
              label="银行流水号">
            </el-table-column>
            <el-table-column
              prop="betUserId"
              label="投注账号">
            </el-table-column>
            <el-table-column
              prop="tradingTime"
              label="交易时间">
            </el-table-column>
            <el-table-column
              prop="tradingSystem"
              label="交易系统">
            </el-table-column>
            <el-table-column
              prop="dealerName"
              label="渠道商名称">
            </el-table-column>
            <el-table-column
              prop="chargeBankCardNo"
              label="充值银行卡号">
            </el-table-column>
            <el-table-column
              prop="relBankCardNo"
              label="关联银行卡号">
            </el-table-column>
            <el-table-column
              prop="telephone"
              label="预留手机号">
            </el-table-column>
            <el-table-column
              prop="tradingAmount"
              label="交易金额（元）">
            </el-table-column>
            <el-table-column
              prop="tradingType"
              label="交易类型">
            </el-table-column>
            <el-table-column
              prop="tradingState"
              label="交易状态">
            </el-table-column> 
            <el-table-column
              prop="failDesc"
              label="失败原因描述">
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
          tradingType: '',
        },
         info:{
          betUserName: '西山易冷',
          idCardNo: '1305231979051****3',
          accountId: '55515151451'
        },
        options: [{
          value: '全部',
          label: '全部'
        }, 
        {
          value: '扣款',
          label: '扣款'
        }, 
        {
          value: '充值',
          label: '充值'
        }, 
        {
          value: '提现',
          label: '提现'
        }, 
        {
          value: '派中奖',
          label: '派中奖'
        }, 
        {
          value: '派小奖',
          label: '派小奖'
        }],
         tableData: [{
          id: '1',
          serialNo: '320160418001',
          orderId: '56987445658',
          bankSerialNo: '--',
          betUserId: '56987445658',
          tradingTime: '2017-2-28 17:18:08',
          tradingSystem: '积分换彩',
          dealerName: '--',
          chargeBankCardNo: '--',
          relBankCardNo: '--',
          telephone: '--',
          tradingAmount: '10.00',
          tradingType: '扣款',
          tradingState: '成功',
          failDesc: ''
        }, 
        {
          id: '2',
          serialNo: '320160418001',
          orderId: '56987445658',
          bankSerialNo: '--',
          betUserId: '56987445658',
          tradingTime: '2017-2-28 17:18:08',
          tradingSystem: '积分换彩',
          dealerName: '--',
          chargeBankCardNo: '--',
          relBankCardNo: '--',
          telephone: '--',
          tradingAmount: '10.00',
          tradingType: '充值',
          tradingState: '失败',
          failDesc: '充值失败'
        },
        {
          id: '3',
          serialNo: '320160418001',
          orderId: '56987445658',
          bankSerialNo: '--',
          betUserId: '56987445658',
          tradingTime: '2017-2-28 17:18:08',
          tradingSystem: '积分换彩',
          dealerName: '--',
          chargeBankCardNo: '--',
          relBankCardNo: '--',
          telephone: '--',
          tradingAmount: '10.00',
          tradingType: '扣款',
          tradingState: '成功',
          failDesc: ''
        },
        {
          id: '4',
          serialNo: '320160418001',
          orderId: '56987445658',
          bankSerialNo: '--',
          betUserId: '56987445658',
          tradingTime: '2017-2-28 17:18:08',
          tradingSystem: '积分换彩',
          dealerName: '--',
          chargeBankCardNo: '--',
          relBankCardNo: '--',
          telephone: '--',
          tradingAmount: '10.00',
          tradingType: '扣款',
          tradingState: '成功',
          failDesc: ''
        }, 
        {
          id: '5',
          serialNo: '320160418001',
          orderId: '56987445658',
          bankSerialNo: '--',
          betUserId: '56987445658',
          tradingTime: '2017-2-28 17:18:08',
          tradingSystem: '积分换彩',
          dealerName: '--',
          chargeBankCardNo: '--',
          relBankCardNo: '--',
          telephone: '--',
          tradingAmount: '10.00',
          tradingType: '扣款',
          tradingState: '成功',
          failDesc: ''
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
