import Vue from 'vue';
import Router from 'vue-router';
import Struct from '@/struct/Struct';
import NotFound from '@/components/NotFoundComponent';

import Banner from '@/page/operate/banner/Banner';
import Special from '@/page/operate/special/Special';


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    redirect: '/operate/banner',
  }, {
    path: '/operate',
    redirect: '/operate/banner',
    component: Struct,
    props: true,
    children: [{
      path: 'banner',
      component: Banner,
    }, {
      path: 'special',
      component: Special
    }]
  }, {
    path: '*',
    component: NotFound
  }],
});
