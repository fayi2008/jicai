<template>
  <el-container style="height: 100%;" id="list2">
    <left></left>
  <el-main>
    <el-table
      :data="tableData"
      border
      style="width: 100%" @row-click="tobuys()">
      <el-table-column
        v-for="items in listTitle"
        :prop="items.prop"
        :label="items.label" >
      </el-table-column>

    </el-table>
    </el-main>
    </el-container>
</template>

<script>
import left from './left'
export default {

  name: 'list1',
  components:{left},
  data () {
    return {
      listTitle:[
        {prop:'num',label:'流程号'},
        {prop:'class',label:'类型'},
        {prop:'setter',label:'申请人'},
        {prop:'getter',label:'需求人'},
        {prop:'comp',label:'组织分类'},
        {prop:'bumen',label:'需求部门'},
        {prop:'type',label:'物资类别'},
        {prop:'time',label:'申请时间'}
      ],
      tableData:[
        {
          num:'X123456789',
          class:'京东',
          setter:'xxx',
          getter:'xxx',
          comp:'集团公司',
          bumen:'采购部',
          type:'礼品',
          time:'2019-7-12 15:00'
        }
      ]
    }
  },
  methods:{
    tobuys(){
      this.$router.push({name:'buys'})
      console.log()
    }
  }
}
</script>

<style scoped>

</style>