<template>
  <div>
    <div class="layer-init border-box">
       <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
         <el-form-item label="渠道商编号">
           <el-input v-model="form.dealerCode" placeholder="渠道商编号"></el-input>
         </el-form-item>
         <el-form-item label="渠道商名称">
           <el-select v-model="form.dealerId" placeholder="全部">
             <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.id"></el-option>
           </el-select>
         </el-form-item>

         <el-form-item label="联系人">
           <el-input v-model="form.contacter" placeholder="联系人"></el-input>
         </el-form-item>
         <el-form-item label="联系电话">
           <el-input v-model="form.telephone" placeholder="联系电话"></el-input>
         </el-form-item>
         <el-form-item label="合同生效日期">
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择开始时间" v-model="form.beginDate" style="width: 100%;"></el-date-picker>
           </el-col>
           <el-col class="line tc" :span="2">-</el-col>
           <el-col :span="10">
             <el-date-picker type="date" placeholder="选择结束时间" v-model="form.endDate" style="width: 100%;"></el-date-picker>
           </el-col>
         </el-form-item>
         <el-form-item label="渠道商状态">
           <el-select v-model="form.dealerState" placeholder="全部">
             <el-option v-for="item in dealerS" :label="item.label" :value="item.value" :key="item.id"></el-option>
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
              prop="dealerName"
              label="渠道商名称">
            </el-table-column>
            <el-table-column
              prop="efDate"
              label="合同生效日期">
            </el-table-column>
            <el-table-column
              prop="contacter"
              label="联系人">
            </el-table-column>
            <el-table-column
              prop="telephone"
              label="联系电话">
            </el-table-column>
            <el-table-column
              prop="bankName"
              label="预缴款银行账户名称">
            </el-table-column>
            <el-table-column
              prop="bankCardNo"
              label="预缴款银行账户号码">
            </el-table-column>
             <el-table-column
              prop="bankFullName"
              label="预缴款开户银行全称">
            </el-table-column>
             <el-table-column
              prop="dealerState"
              label="状态">
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
          dealerCode: '',
          dealerId: '',
          contacter: '',
          telephone: '',
          beginDate: '',
          endDate: '',
          dealerState: ''
        },
        options: [{
          value: '全部',
          label: '全部'
        },
        {
          value: '具体渠道商名称',
          label: '具体渠道商名称'
        },
        {
          value: '按渠道商编码升序排序',
          label: '按渠道商编码升序排序'
        }],
        dealerS: [{
          value: '全部',
          label: '全部'
        },
         {
          value: '正常',
          label: '正常'
        },
        {
          value: '冻结',
          label: '冻结'
        },
        {
          value: '交易中',
          label: '交易中'
        }],
         tableData: [{
          id: '1',
          dealerName: '渠道商A',
          efDate: '2017-3-3 13:17:47',
          contacter: '李岚',
          telephone: '13512012514',
          bankName: '建设银行',
          bankCardNo: '6525645651212121551',
          bankFullName: '朝阳门建设支行',
          dealerState: '正常'
        },
        {
          id: '2',
         dealerName: '渠道商A',
          efDate: '2017-3-3 13:17:47',
          contacter: '李岚',
          telephone: '13512012514',
          bankName: '建设银行',
          bankCardNo: '6525645651212121551',
          bankFullName: '朝阳门建设支行',
          dealerState: '正常'
        },
        {
          id: '3',
          dealerName: '渠道商A',
          efDate: '2017-3-3 13:17:47',
          contacter: '李岚',
          telephone: '13512012514',
          bankName: '建设银行',
          bankCardNo: '6525645651212121551',
          bankFullName: '朝阳门建设支行',
          dealerState: '正常'
        },
        {
          id: '4',
          dealerName: '渠道商A',
          efDate: '2017-3-3 13:17:47',
          contacter: '李岚',
          telephone: '13512012514',
          bankName: '建设银行',
          bankCardNo: '6525645651212121551',
          bankFullName: '朝阳门建设支行',
          dealerState: '正常'
        },
        {
          id: '5',
          dealerName: '渠道商A',
          efDate: '2017-3-3 13:17:47',
          contacter: '李岚',
          telephone: '13512012514',
          bankName: '建设银行',
          bankCardNo: '6525645651212121551',
          bankFullName: '朝阳门建设支行',
          dealerState: '正常'
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
