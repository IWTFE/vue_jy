<template>
  <div>
    <div class="layer-init border-box"> 
       <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
         <el-form-item label="游戏名称">
           <el-input v-model="form.gameName" placeholder="游戏名称"></el-input>
         </el-form-item>
         <el-form-item label="开始期号">
           <el-input v-model="form.beginIssue" placeholder="开始期号"></el-input>
         </el-form-item>
         <el-form-item label="结束期号">
           <el-input v-model="form.endIssue" placeholder="结束期号"></el-input>
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
              prop="gameName"
              label="游戏名称">
            </el-table-column>
            <el-table-column
              prop="issueNumber"
              label="期号">
            </el-table-column>
            <el-table-column
              prop="sale"
              label="销售额">
            </el-table-column>
            <el-table-column label="划拨积分公司奖金账户">
             <el-table-column
               prop="amount1"
               label="金额（元）">
             </el-table-column>
             <el-table-column
               prop="payTime1"
               label="划付时间">
             </el-table-column>
             <el-table-column
               prop="digest1"
               label="摘要">
             </el-table-column>
           </el-table-column>
           <el-table-column label="划拨中福彩中心交易系统归集户">
             <el-table-column
               prop="amount2"
               label="金额（元）">
             </el-table-column>
             <el-table-column
               prop="payTime2"
               label="划付时间">
             </el-table-column>
             <el-table-column
               prop="digest2"
               label="摘要">
             </el-table-column>
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
          gameName: '',
          beginIssue: '',
          endIssue: ''
        },
         tableData: [{
          id: '1',
          gameName: '福彩',
          issueNumber: '20170212',
          sale: '100.00',
          amount1: '100.00',
          payTime1: '2017-3-3 11:46:22',
          digest1: '摘要1',
          amount2: '100.00',
          payTime2: '2017-3-3 11:46:22',
          digest2: '摘要2'

        },
        {
          id: '2',
          gameName: '福彩',
          issueNumber: '20170212',
          sale: '100.00',
          amount1: '100.00',
          payTime1: '2017-3-3 11:46:22',
          digest1: '摘要1',
          amount2: '100.00',
          payTime2: '2017-3-3 11:46:22',
          digest2: '摘要2'
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
