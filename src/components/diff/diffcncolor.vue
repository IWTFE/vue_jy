<template>
  <div>
    <div class="layer-init border-box"> 
       <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
         <el-form-item label="系统流水号">
           <el-input v-model="form.serialNo" placeholder="系统流水号"></el-input>
         </el-form-item>
         <el-form-item label="银行流水号">
           <el-input v-model="form.bankSerialNo" placeholder="银行流水号"></el-input>
         </el-form-item>
         <el-form-item label="投注资金账号">
           <el-input v-model="form.accountId" placeholder="投注资金账号"></el-input>
         </el-form-item>
           <el-form-item label="单据类别">
           <el-select v-model="form.billType" placeholder="全部">
             <el-option v-for="item in options" :label="item.value" :value="item.value" :key="item.id"></el-option>
           </el-select>
         </el-form-item>
           <el-form-item label="支付类型">
           <el-select v-model="form.payType" placeholder="全部">
             <el-option v-for="item_ in selection" :label="item_.value" :value="item_.value" :key="item.id"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="差异描述">
           <el-input v-model="form.diffDesc" placeholder="差异描述"></el-input>
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
              prop="serialNo"
              label="系统流水号">
            </el-table-column>
            <el-table-column
              prop="accountId"
              label="投注资金账号">
            </el-table-column>
            <el-table-column
              prop="billType"
              label="单据类别">
            </el-table-column>
            <el-table-column
              prop="payType"
              label="支付类型">
            </el-table-column>
            <el-table-column
              prop="tradingAmount"
              label="交易金额">
            </el-table-column>
            <el-table-column
              prop="transTime"
              label="交易时间">
            </el-table-column>
            <el-table-column
              prop="transStae"
              label="交易状态">
            </el-table-column>
            <el-table-column
              prop="bankSerialNo"
              label="银行流水号">
            </el-table-column>
            <el-table-column
              prop="zytPayType"
              label="中银通支付类型">
            </el-table-column>
            <el-table-column
              prop="zytTradingAmount"
              label="中银通交易金额">
            </el-table-column>
            <el-table-column
              prop="zytTradingTime"
              label="中银通交易时间">
            </el-table-column>
            <el-table-column
              prop="zytLiquidationTime"
              label="中银通清算时间">
            </el-table-column>
            <el-table-column
              prop="zytTradingStae"
              label="中银通交易状态">
            </el-table-column>
            <el-table-column
              prop="diffDesc"
              label="差异描述">
            </el-table-column>
            <el-table-column
              prop="diffDesc"
              label="处理方式">
            </el-table-column>
            <el-table-column
              prop="diffDesc"
              label="调账结果描述">
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
          serialNo: '',
          bankSerialNo: '',
          accountId: '',
          billType: '',
          payType: '',
          diffDesc: ''
        },
        options: [
            {
                value:'全部',
                payment:[
                    {value:'全部'}
                ]
            },
            {
              value:'充值',
              payment:[
                  {value:'全部'},
                  {value:'网银'},
                  {value:"银行卡提现冲正"}
              ]
            },
            { 
              value:'消费',
              payment:[
                  {value:'全部'},
                  {value:"银行卡提现"},
              ]
            },       
        ],
         tableData: [{
          id: '1',
          serialNo: '12546485524',
          accountId: '12546485524',
          billType: '充值',
          payType: '派奖',
          tradingAmount: '100.00',
          transTime: '2017-3-2 20:05:55',
          transStae: '成功',
          bankSerialNo: '8515642012',
          zytPayType: '派奖',
          zytTradingAmount: '110.00',
          zytTradingTime: '2017-3-2 20:05:55',
          zytLiquidationTime: '2017-3-2 20:05:55',
          zytTradingStae: '交易成功',
          diffDesc: '交易全额，交易时间差异'
        },
        {
          id: '2',
          serialNo: '12546485524',
          accountId: '12546485524',
          billType: '充值',
          payType: '投注',
          tradingAmount: '100.00',
          transTime: '2017-3-2 20:05:55',
          transStae: '成功',
          bankSerialNo: '8515642012',
          zytPayType: '投注',
          zytTradingAmount: '110.00',
          zytTradingTime: '2017-3-2 20:05:55',
          zytLiquidationTime: '2017-3-2 20:05:55',
          zytTradingStae: '交易失败',
          diffDesc: '交易状态差异'
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
    },
    computed:{
      selection: function() {
        for (var i = 0; i < this.options.length; i++) {
           
          if (this.options[i].value === this.form.billType) {
              this.form.payType = null
              return this.options[i].payment;
          }
        }
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
