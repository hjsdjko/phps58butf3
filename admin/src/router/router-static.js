import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import discussremenxiaoshuo from '@/views/modules/discussremenxiaoshuo/list'
    import xiaoshuofenlei from '@/views/modules/xiaoshuofenlei/list'
    import chapterremenxiaoshuo from '@/views/modules/chapterremenxiaoshuo/list'
    import wodeshujia from '@/views/modules/wodeshujia/list'
    import xiaoshuotingshu from '@/views/modules/xiaoshuotingshu/list'
    import systemintro from '@/views/modules/systemintro/list'
    import remenxiaoshuo from '@/views/modules/remenxiaoshuo/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zuozhe from '@/views/modules/zuozhe/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/discussremenxiaoshuo',
        name: '热门小说评论',
        component: discussremenxiaoshuo
      }
      ,{
	path: '/xiaoshuofenlei',
        name: '小说分类',
        component: xiaoshuofenlei
      }
      ,{
	path: '/chapterremenxiaoshuo',
        name: '热门小说章节',
        component: chapterremenxiaoshuo
      }
      ,{
	path: '/wodeshujia',
        name: '我的书架',
        component: wodeshujia
      }
      ,{
	path: '/xiaoshuotingshu',
        name: '小说听书',
        component: xiaoshuotingshu
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/remenxiaoshuo',
        name: '热门小说',
        component: remenxiaoshuo
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/zuozhe',
        name: '作者',
        component: zuozhe
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '公告信息分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
