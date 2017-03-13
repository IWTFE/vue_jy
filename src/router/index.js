import Vue from 'vue'
import Router from 'vue-router'
import login from 'components/login'
import home from 'components/home'
import store from 'src/store/index'

// @haoboyu account 账户信息查询
import account from 'components/account/account'
// @haoboyu frozen 账户冻结与解冻管理
import frozen from 'components/account/frozen'
// @haoboyu detailed 账户收支明细查询
import detailed from 'components/account/detailed'
// @haoboyu prepay 预缴款充值记录查询
import prepay from 'components/trade/prepay'
// @haoboyu recharge  充值记录查询
import recharge from 'components/trade/recharge'
// @haoboyu betting  投注记录查询
import betting from 'components/trade/betting'
// @haoboyu prize  派奖记录查询
import prize from 'components/trade/prize'
// @haoboyu withdraw  提现记录查询
import withdraw from 'components/trade/withdraw'
// @haoboyu integral  与交易系统对账任务查询
import integral from 'components/recon/integral'
// @haoboyu cncolor   与国彩通对账任务查询
import cncolor from 'components/recon/cncolor'
// @haoboyu diffintegral 与交易系统差异账记录处理
import diffintegral from 'components/diff/diffintegral'
// @haoboyu cncolor  与国彩通差异账记录处理
import diffcncolor from 'components/diff/diffcncolor'
// @haoboyu mesoseries 中行预缴款划付记录查询
import mesoseries from 'components/pay/mesoseries'
// @haoboyu silver  中银通备付金账户划付查询
import silver from 'components/pay/silver'
// @haoboyu channel  渠道商基本信息查询
import channel from 'components/channel/channel'
// @haoboyu adduser  角色管理
import adduser from 'components/power/user/adduser'
// @haoboyu permissionquery  角色权限查询
import permissionquery from 'components/power/user/permissionquery'


Vue.use(Router)
// console.log(sessionStorage.getItem('menus_')+'获取加工好的菜单sss！')

var menus_ = sessionStorage.getItem('menus_')
var menus_1 =JSON.parse(menus_)
console.log(menus_1)
const routes = [
  {
    path: '/login',
    component:login,
    hidden:true
  },
  {
    path:'/',
    component:home,
    children:[
      {path:'/account', component: account, name: 'account'},
    {
      path: '/account/frozen',
      name: 'frozen',
      component: frozen
    },
    {
      path: '/account/detailed',
      name: 'detailed',
      component: detailed
    },
    {
      path: '/trade/prepay',
      name: 'prepay',
      component: prepay
    },
    {
      path: '/trade/recharge',
      name: 'recharge',
      component: recharge
    },
    {
      path: '/trade/betting',
      name: 'betting',
      component: betting
    },
    {
      path: '/trade/prize',
      name: 'prize',
      component: prize
    },
    {
      path: '/trade/withdraw',
      name: 'withdraw',
      component: withdraw
    },
    {
      path: '/recon/integral',
      name: 'integral',
      component: integral
    },
    {
      path: '/recon/cncolor',
      name: 'cncolor',
      component: cncolor
    },
    {
      path: '/diff/diffintegral',
      name: 'diffintegral',
      component: diffintegral
    },
    {
      path: '/diff/diffcncolor',
      name: 'diffcncolor',
      component: diffcncolor
    },
    {
      path: '/pay/mesoseries',
      name: 'mesoseries',
      component: mesoseries
    },
    {
      path: '/pay/silver',
      name: 'silver',
      component: silver
    },
    {
      path: '/channel/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/power/user/adduser',
      name: 'adduser',
      component: adduser,
      alias: '/adduser'
    },
     {
      path: '/power/user/permissionquery',
      name: 'permissionquery',
      component: permissionquery
    }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   }
//   next()
// })
//
// router.afterEach(transition => {
//   NProgress.done();
// });


// function generateRoutesFromMenu (menu = [],routes = []) {
//    for(var i in menu) {
//       let item = menu[i]
//       if(item.path){
//         routes.push(item)
//       }
//    }
//    console.log(routes)
//    return routes
//
// }
