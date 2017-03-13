<template>
  <div>
    <div class="layer-init border-box"> 
       <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
         <el-form-item label="划付日期">
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择开始时间" v-model="form.beginDate" style="width: 100%;"></el-date-picker>
           </el-col>
           <el-col class="line tc" :span="2">-</el-col>
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择结束时间" v-model="form.endDate" style="width: 100%;"></el-date-picker>
           </el-col>
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
              prop="dailySales"
              label="日销售额（元）">
            </el-table-column>
            <el-table-column
              prop="amount"
              label="划付金额（元）">
            </el-table-column>
            <el-table-column
              prop="payTime"
              label="划付时间">
            </el-table-column>
            <el-table-column
              prop="digest"
              label="摘要">
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
          beginDate: '',
          endDate: ''
        },
         tableData: [{
          id: '1',
          dailySales: '2001.10',
          amount: '2001.10',
          payTime: '2016-10-29 15:40:03',  
          digest: '积分换彩销售（2016-10-28）'
        },
        {
          id: '2',
          dailySales: '2001.10',
          amount: '2001.10',
          payTime: '2016-10-29 15:40:03',  
          digest: '积分换彩销售（2016-10-28）'
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
