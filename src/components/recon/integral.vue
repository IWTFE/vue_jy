<template>
  <div>
    <div class="layer-init border-box"> 
       <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
         <el-form-item label="任务编号">
           <el-input v-model="form.taskNo" placeholder="任务编号"></el-input>
         </el-form-item>
         <el-form-item label="对账文件名称">
           <el-input v-model="form.reconFileName" placeholder="对账文件名称"></el-input>
         </el-form-item>
         <el-form-item label="对账日期">
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择开始时间" v-model="form.beginDate" style="width: 100%;"></el-date-picker>
           </el-col>
           <el-col class="line tc" :span="2">-</el-col>
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择结束时间" v-model="form.endDate" style="width: 100%;"></el-date-picker>
           </el-col>
         </el-form-item>
           <el-form-item label="对账类别">
           <el-select v-model="form.reconType" placeholder="全部">
             <el-option v-for="item in reconType_" :label="item.label" :value="item.value" :key="item.id"></el-option>
           </el-select>
         </el-form-item>
           <el-form-item label="对账结果">
           <el-select v-model="form.reconResult" placeholder="全部">
             <el-option v-for="item in reconResult_" :label="item.label" :value="item.value" :key="item.id"></el-option>
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
              prop="taskNo"
              label="任务编号">
            </el-table-column>
            <el-table-column
              prop="reconType"
              label="对账类别">
            </el-table-column>
            <el-table-column
              prop="reconTime"
              label="对账时间">
            </el-table-column>
            <el-table-column
              prop="reconResult"
              label="对账结果">
            </el-table-column>
            <el-table-column
              prop="reconFileName"
              label="对账文件名称">
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
          taskNo: '',
          reconFileName: '',
          beginDate: '',
          endDate: '',
          reconType: '',
          reconResult: ''
        },
        reconType_: [{
          value: '全部',
          label: '全部'
        },
        {
          value: '投注',
          label: '投注'
        },
        {
          value: '派中奖',
          label: '派中奖'
        },
        {
          value: '派小奖',
          label: '派小奖'
        }],
        reconResult_: [{
          value: '全部',
          label: '全部'
        },
        {
          value: '任务执行成功',
          label: '任务执行成功'
        },
        {
          value: '任务执行失败',
          label: '任务执行失败'
        }],
         tableData: [{
          id: '1',
          taskNo: '002',
          reconType: '投注',
          reconTime: '2017-3-2 15:40:03',  
          reconResult: '任务执行成功',
          reconFileName: '2123121.txt'
        },
        {
          id: '2',
          taskNo: '001',
          reconType: '提现',
          reconTime: '2017-3-2 15:40:03',  
          reconResult: '任务执行失败',
          reconFileName: '2123121.txt'
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
