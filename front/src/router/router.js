import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import zuozheList from '../pages/zuozhe/list'
import zuozheDetail from '../pages/zuozhe/detail'
import zuozheAdd from '../pages/zuozhe/add'
import xiaoshuofenleiList from '../pages/xiaoshuofenlei/list'
import xiaoshuofenleiDetail from '../pages/xiaoshuofenlei/detail'
import xiaoshuofenleiAdd from '../pages/xiaoshuofenlei/add'
import remenxiaoshuoList from '../pages/remenxiaoshuo/list'
import remenxiaoshuoDetail from '../pages/remenxiaoshuo/detail'
import remenxiaoshuoAdd from '../pages/remenxiaoshuo/add'
import remenxiaoshuoChapter from '../pages/remenxiaoshuo/chapter'
import wodeshujiaList from '../pages/wodeshujia/list'
import wodeshujiaDetail from '../pages/wodeshujia/detail'
import wodeshujiaAdd from '../pages/wodeshujia/add'
import xiaoshuotingshuList from '../pages/xiaoshuotingshu/list'
import xiaoshuotingshuDetail from '../pages/xiaoshuotingshu/detail'
import xiaoshuotingshuAdd from '../pages/xiaoshuotingshu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussremenxiaoshuoList from '../pages/discussremenxiaoshuo/list'
import discussremenxiaoshuoDetail from '../pages/discussremenxiaoshuo/detail'
import discussremenxiaoshuoAdd from '../pages/discussremenxiaoshuo/add'
import chapterremenxiaoshuoList from '../pages/chapterremenxiaoshuo/list'
import chapterremenxiaoshuoDetail from '../pages/chapterremenxiaoshuo/detail'
import chapterremenxiaoshuoAdd from '../pages/chapterremenxiaoshuo/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'zuozhe',
					component: zuozheList
				},
				{
					path: 'zuozheDetail',
					component: zuozheDetail
				},
				{
					path: 'zuozheAdd',
					component: zuozheAdd
				},
				{
					path: 'xiaoshuofenlei',
					component: xiaoshuofenleiList
				},
				{
					path: 'xiaoshuofenleiDetail',
					component: xiaoshuofenleiDetail
				},
				{
					path: 'xiaoshuofenleiAdd',
					component: xiaoshuofenleiAdd
				},
				{
					path: 'remenxiaoshuo',
					component: remenxiaoshuoList
				},
				{
					path: 'remenxiaoshuoDetail',
					component: remenxiaoshuoDetail
				},
				{
					path: 'remenxiaoshuoAdd',
					component: remenxiaoshuoAdd
				},
				{
					path: 'remenxiaoshuoChapter',
					component: remenxiaoshuoChapter
				},
				{
					path: 'wodeshujia',
					component: wodeshujiaList
				},
				{
					path: 'wodeshujiaDetail',
					component: wodeshujiaDetail
				},
				{
					path: 'wodeshujiaAdd',
					component: wodeshujiaAdd
				},
				{
					path: 'xiaoshuotingshu',
					component: xiaoshuotingshuList
				},
				{
					path: 'xiaoshuotingshuDetail',
					component: xiaoshuotingshuDetail
				},
				{
					path: 'xiaoshuotingshuAdd',
					component: xiaoshuotingshuAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussremenxiaoshuo',
					component: discussremenxiaoshuoList
				},
				{
					path: 'discussremenxiaoshuoDetail',
					component: discussremenxiaoshuoDetail
				},
				{
					path: 'discussremenxiaoshuoAdd',
					component: discussremenxiaoshuoAdd
				},
				{
					path: 'chapterremenxiaoshuo',
					component: chapterremenxiaoshuoList
				},
				{
					path: 'chapterremenxiaoshuoDetail',
					component: chapterremenxiaoshuoDetail
				},
				{
					path: 'chapterremenxiaoshuoAdd',
					component: chapterremenxiaoshuoAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
