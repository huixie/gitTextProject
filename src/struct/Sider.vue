<template>
  <el-menu
    :default-active="menuDefaultActive"
    router
  >
    <el-menu-item  v-for="item in menuList" :key="item.key" :index="item.route" :route='{path:item.route}'>
      <i :class="item.icon"></i>
      <span slot="title" v-html="item.title"></span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'Sider',
  data() {
    console.log('side', this.$route.path);
    return {
      menuList: [
        {
          key: 1,
          title: 'Banner',
          icon: 'el-icon-picture',
          route: '/operate/banner'
        },
        {
          key: 2,
          title: '专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题',
          icon: 'el-icon-document',
          route: '/operate/special'
        }
      ],
      menuDefaultActive: this.$route.path || '/operate/banner'
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'changeMenuActive'
  },
  methods: {
    //改变菜单
    changeMenuActive() {
      this.menuDefaultActive = this.$route.path;
    }
  }
};
</script>

<style scoped lang='less'>
.el-menu {
  flex: 1;
  background: #333845;
  .el-menu-item {
    color: #a1a5b3;
    i {
      color: #4e5260;
    }
    &.is-active {
      color: #fff;
      background: #57a2f1;
      i {
        color: #fff;
      }
    }
    &:hover,
    &:focus {
      color: #fff;
      background: #57a2f1;
      outline: 0;
      i {
        color: #fff;
      }
    }
  }
}
</style>

