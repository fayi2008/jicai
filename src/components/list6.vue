<template>
  <el-container style="height: 100%;" id="list2">
    <left></left>
    <el-main>
      <!--<el-row style="padding-bottom: 20px;">-->
        <!--<el-col :span="24" style="text-align: right;">-->
          <!--<el-button type="primary" @click="dialogFormVisible=true">合并（弹窗填写备注）</el-button>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <!--<el-table-column-->
          <!--type="selection"-->
          <!--width="55">-->
        <!--</el-table-column>-->
        <el-table-column
          v-for="items in listTitle"
          :prop="items.prop"
          :label="items.label">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">

            <el-button type="text" size="small">确认订单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import left from './left'

export default {

  name: 'list1',
  components: {left},
  data () {
    return {
      listTitle: [
        {prop: 'num', label: '出账日期'},
        {prop: 'class', label: '订单号'},
        {prop: 'classes', label: '申购单号'},
        {prop: 'setter', label: '需求人'},
        {prop: 'pro', label: '需求部门'},
        {prop: 'time', label: '申请时间'},
        {prop: 'money', label: '订单总金额'}
      ],
      tableData: [
        {
          num: '2019-07-23',
          class: '2019072322222',
          classes: '2019033333',
          setter: 'xxx',
          time:'2019-07-22',
          money:'40000.00',
          pro:'集团办公室'
        },
        {
          num: '2019-07-23',
          class: '2019072322222',
          classes: '2019033333',
          setter: 'xxx',
          time:'2019-07-22',
          money:'40000.00',
          pro:'集团办公室'
        },
        {
          num: '2019-07-23',
          class: '2019072322222',
          classes: '2019033333',
          setter: 'xxx',
          time:'2019-07-22',
          money:'40000.00',
          pro:'集团办公室'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>