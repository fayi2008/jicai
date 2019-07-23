<template>
  <el-container style="height: 100%;" id="list2">
    <left></left>
    <el-main>

      <el-table
        :data="tableData"
        border
        style="width: 100%" :span-method="objectSpanMethod">

        <el-table-column
          v-for="items in listTitle"
          :prop="items.prop"
          :label="items.label">
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

        {prop: 'class', label: '订单号'},
        {prop: 'classes', label: '申购单号'},
        {prop: 'setter', label: '需求人'},
        {prop: 'pro', label: '需求部门'},
        {prop: 'money', label: '订单总金额'},
        {prop: 'beizhu', label: '备注'},
      ],
      tableData: [
        {

          class: '2019072322221',
          classes: '2019033333',
          setter: 'xxx',
          pro:'集团办公室',
          money:'40000.00',
          beizhu:'合并一个开票'
        },
        {
          num: '2019-07-23',
          class: '2019072322222',
          classes: '2019033333',
          setter: 'xxx',
          pro:'集团办公室',
          time:'2019-07-22',
          money:'40000.00',
          beizhu:'合并一个开票'
        },
        {
          num: '2019-07-23',
          class: '2019072322223',
          classes: '2019033333',
          setter: 'xxx',
          pro:'集团办公室',
          time:'2019-07-22',
          money:'40000.00',
          beizhu:'合并一个开票'
        }
      ]
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 5) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
}
</script>

<style scoped>

</style>