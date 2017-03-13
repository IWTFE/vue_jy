<template>
  <div>
    <div class="layer-init border-box"> 
       <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
         <el-form-item label="投注账号">
           <el-input v-model="form.betUserId" placeholder="投注账号"></el-input>
         </el-form-item>
         <el-form-item label="投注资金账号">
           <el-input v-model="form.accountId" placeholder="投注资金账号"></el-input>
         </el-form-item>
         <el-form-item label="充值银行卡号">
           <el-input v-model="form.bankCardNo" placeholder="充值银行卡号"></el-input>
         </el-form-item>
         <el-form-item label="渠道商名称">
           <el-select v-model="form.dealerName" placeholder="全部">
             <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.id"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="充值日期">
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择开始时间" v-model="form.beginDate" style="width: 100%;"></el-date-picker>
           </el-col>
           <el-col class="line tc" :span="2">-</el-col>
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择结束时间" v-model="form.endDate" style="width: 100%;"></el-date-picker>
           </el-col>
         </el-form-item>
         <el-form-item label="系统流水号">
           <el-input v-model="form.serialNo" placeholder="系统流水号"></el-input>
         </el-form-item>
          <el-form-item label="交易订单号">
           <el-input v-model="form.orderId" placeholder="交易订单号"></el-input>
         </el-form-item>
         <el-form-item label="银行流水号">
           <el-input v-model="form.bankSerialNo" placeholder="银行流水号"></el-input>
         </el-form-item>

         <el-form-item label="资金来源">
           <el-select v-model="form.fundSrc" placeholder="全部">
             <el-option v-for="item in funds_" :label="item.label" :value="item.value" :key="item.id"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="交易状态">
           <el-select v-model="form.tradingState" placeholder="全部">
             <el-option v-for="item in tradingState_" :label="item.label" :value="item.value" :key="item.id"></el-option>
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
          <span  class="span_h1">查询结果</span>
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
              prop="chargeTime"
              label="充值时间">
            </el-table-column>
            <el-table-column
              prop="bankCardNo"
              label="充值银行卡号">
            </el-table-column>
            <el-table-column
              prop="betUserId"
              label="投注账号">
            </el-table-column>
             <el-table-column
              prop="accountId"
              label="投注资金账号">
            </el-table-column>
             <el-table-column
              prop="tradingAmount"
              label="交易金额（元）">
            </el-table-column>
            <el-table-column
              prop="fundSrc"
              label="资金来源">
            </el-table-column>
            <el-table-column
              prop="dealerName"
              label="渠道商名称">
            </el-table-column>
            <el-table-column
              prop="tradingState"
              label="交易状态">
            </el-table-column>
            <el-table-column
              prop="tradingDesc"
              label="具体描述">
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
          bankCardNo: '',
          dealerName: '',
          serialNo: '',
          orderId: '',
          bankSerialNo: '',
          beginDate: '',
          endDate: '',
          fundSrc: '',
          tradingState: ''
        },
        options: [{
          value: '全部',
          label: '全部'
        }, {
          value: '具体渠道商名称',
          label: '具体渠道商名称'
        }, {
          value: '按渠道商编码升序排序',
          label: '按渠道商编码升序排序'
        }],
        funds_: [{
          value: '全部',
          label: '全部'
        }, {
          value: '预缴款',
          label: '预缴款'
        },
         {
          value: '网银',
          label: '网银'
        }],
        tradingState_: [{
          value: '全部',
          label: '全部'
        },
        {
          value: '交易成功',
          label: '交易成功'
        },
        {
          value: '交易失败',
          label: '交易失败'
        },
        {
          value: '交易中',
          label: '交易中'
        }
        ],
         tableData: [{
          id: '1',
          serialNo: '20101021002',
          orderId: '5896545698200',
          bankSerialNo: '623555151244514',
          chargeTime: '2017-3-1 16:18:29',
          bankCardNo: '1231123541221',
          betUserId: '2123121',
          accountId: '55434545654',
          tradingAmount: '100.00',
          fundSrc: '预缴款',
          dealerName: '渠道商A',
          tradingState: '交易成功',
          tradingDesc: ''
        },
        {
          id: '2',
          serialNo: '20101021002',
          orderId: '5896545698200',
          bankSerialNo: '623555151244514',
          chargeTime: '2017-3-1 16:18:29',
          bankCardNo: '1231123541221',
          betUserId: '2123121',
          accountId: '55434545654',
          tradingAmount: '100.00',
          fundSrc: '预缴款',
          dealerName: '渠道商A',
          tradingState: '交易失败',
          tradingDesc: '银行卡余额不足'
        },
        {
          id: '3',
          serialNo: '20101021002',
          orderId: '5896545698200',
          bankSerialNo: '623555151244514',
          chargeTime: '2017-3-1 16:18:29',
          bankCardNo: '1231123541221',
          betUserId: '2123121',
          accountId: '55434545654',
          tradingAmount: '100.00',
          fundSrc: '预缴款',
          dealerName: '渠道商A',
          tradingState: '交易失败',
          tradingDesc: '银行卡余额不足'
        },
        {
          id: '4',
          serialNo: '20101021002',
          orderId: '5896545698200',
          bankSerialNo: '623555151244514',
          chargeTime: '2017-3-1 16:18:29',
          bankCardNo: '1231123541221',
          betUserId: '2123121',
          accountId: '55434545654',
          tradingAmount: '100.00',
          fundSrc: '预缴款',
          dealerName: '渠道商A',
          tradingState: '交易失败',
          tradingDesc: '银行卡余额不足'
        },
        {
          id: '5',
          serialNo: '20101021002',
          orderId: '5896545698200',
          bankSerialNo: '623555151244514',
          chargeTime: '2017-3-1 16:18:29',
          bankCardNo: '1231123541221',
          betUserId: '2123121',
          accountId: '55434545654',
          tradingAmount: '100.00',
          fundSrc: '预缴款',
          dealerName: '渠道商A',
          tradingState: '交易失败',
          tradingDesc: '银行卡余额不足'
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
