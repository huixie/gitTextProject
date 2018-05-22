
<template>
  <div id="app">
    <router-view/>  
  </div>
</template>

<script>
console.log('11', this.$router);
export default {
  name: 'App'
};
</script>

<style lang='less'>
@import '../src/style/base.less';
</style>
