<template>
  <div class="page page-banner">
    <section class="page-header">
      <div>
        <el-button icon="plus" type="primary" size="small" @click="$router.push({name:'bannerAdd'})">新增</el-button>
        <!-- <el-button v-if='!order' size="small" type="text" @click="setOrder">排序</el-button>
        <template v-else>
          <el-button type="primary" @click="doneOrder">完成</el-button>
          <el-button type="text" @click="restoreOrder">取消</el-button>
        </template> -->
      </div>
      <div>
        <el-select v-model="isPast" placeholder="请选择" size="small">
          <el-option label="未过期" value="0"></el-option> 
          <el-option label="已过期" value="1"></el-option> 
        </el-select>
      </div>
    </section>
    <section class="page-content">
      <el-table :data="filter_list" border style="width: 100%">
        <el-table-column prop="title" label="备注">
          <template slot-scope="scope">
            {{scope.row.title|shortTitle}}
          </template>
        </el-table-column>
        <el-table-column label="banner图" width="180">
          <template slot-scope="scope">
            <img :src="scope.row.pic_url" class="pic_review" alt="">
          </template>
        </el-table-column>
        <el-table-column prop="online_time" label="上线时间" width="300">
          <template slot-scope="scope">
            <div class="start_time">
              {{scope.row.start_time | sliceTime}} ~ {{scope.row.end_time| sliceTime}}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="70">
          <template slot-scope="scope">
            <span 
              v-for="item in type_data" 
              v-show="scope.row.banner_type==item.type"
              :key="item.type">{{item.text}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="online_status" label="状态" width="90">
          <template slot-scope="scope">
            <span v-for="item in status_data" :key="item.status" v-show="scope.row.type==item.status">
              <el-tag :type="item.tag">
                {{item.text}}
              </el-tag>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" type="text" align='center'>编辑</el-button>
            <el-button type="text" v-show="scope.$index > 0" size="small">上移</el-button>
            <el-button type="text" v-show="scope.$index < filter_list.length-1" size="small">下移</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
import { getBannerList } from '@/api';
export default {
  data() {
    return {
      isPast: '0', //是否过期
      status_data: [
        { status: 0, text: '已删除', tag: 'danger' },
        { status: 1, text: '已过期', tag: 'gray' },
        { status: 2, text: '在线中', tag: 'success' },
        { status: 3, text: '未开始', tag: 'primary' }
      ],
      type_data: [
        { type: 1, text: '商品' },
        { type: 2, text: '专题' },
        { type: 3, text: '活动' },
        { type: 4, text: '链接' }
      ],
      list: []
    };
  },
  created: function() {
    const _self = this;
    getBannerList(null, function(res) {
      _self.list.splice(0);
      // 在线状态
      let time_now = new Date();
      // 0已过期，1在线中，2未开始
      debugger;
      res.list.forEach(e => {
        if (time_now < new Date(e.start_time)) {
          e.online = 2;
        } else if (time_now > new Date(e.end_time)) {
          e.online = 0;
        } else {
          e.online = 1;
        }
        _self.list.push(e);
      });
    });
  },
  computed: {
    filter_list() {
      return this.list.filter(
        e => typeof e.online === 'number' && e.online != 0
      );
    }
  }
};
</script>

<style scoped lang="less">
.page-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.pic_review {
  display: block;
  border-radius: 2px;
  height: 60px;
  margin: 7px 0;
}
</style>

