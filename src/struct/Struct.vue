<template>
  <el-container>
    <el-header> <Header/></el-header>
    <el-container>
      <el-aside width="200px"><Sider /></el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sider from './Sider';
import Header from './Header';

export default {
  data() {
    return {};
  },
  created: function() {
    console.log(this.$route);
  },
  components: { Sider, Header }
};
</script>
<style scoped lang='less'>
.el-header {
  background: #20262f;
  color: #fff;
  display: flex;
  height: 70px;
  h2 {
    display: flex;
    align-items: center;
  }
}
.el-aside {
  display: flex;
  flex-direction: column;
}
</style>
