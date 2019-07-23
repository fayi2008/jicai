<template>
  <el-aside id="left">
    <el-menu :default-openeds="['1','2']">
      <el-submenu index="1">
        <template slot="title">采购模块</template>
        <router-link :to="{ name: 'list1'}"><el-menu-item index="1-1-1">审批中</el-menu-item></router-link>
        <!--<router-link :to="{ name: 'list2'}"><el-menu-item index="1-1-2">待确认</el-menu-item></router-link>-->
        <router-link :to="{ name: 'list3'}"><el-menu-item index="1-1-3">已审批</el-menu-item></router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">对账模块</template>
        <router-link :to="{ name: 'list4'}"><el-menu-item index="1-2-1">对账单</el-menu-item></router-link>
        <router-link :to="{ name: 'list5'}"><el-menu-item index="1-2-2">开票信息</el-menu-item></router-link>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>