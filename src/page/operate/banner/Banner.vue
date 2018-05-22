<template>
  <div class="page page-banner">
   banner
  </div>
</template>
<script>
import { getBannerList } from '@/api';
export default {
  data() {
  },
  created: function() {
    const _self = this;
    getBannerList(null, function(res) {
      console.log(res)
    });
  }
};
</script>

<style scoped lang="less">

</style>

