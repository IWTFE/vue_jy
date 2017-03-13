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
// @haoboyu 测试
import test from 'components/power/user/test'

// @yanchaochao RoleManagement  角色管理
import RoleManagement from 'components/power/user/RoleManagement'
// @yanchaochao RoleRightsManagement  角色权限管理
import RoleRightsManagement from 'components/power/user/RoleRightsManagement'
// @yanchaochao RoleRightsSearch  角色权限查询
import RoleRightsSearch from 'components/power/user/RoleRightsSearch'
// @yanchaochao UserRightsManagement  用户权限管理
import UserRightsManagement from 'components/power/user/UserRightsManagement'
//@yanchaochao UserRightsSearch 用户权限查询
import UserRightsSearch from 'components/power/user/UserRightsSearch'
//@yanchaochao resetPassword 重置用户密码
import resetPassword from 'components/power/user/resetPassword'
//@yanchaochao newPassword 修改密码
import newPassword from 'components/power/user/newPassword'
//@yanchaochao adminlog 管理员操作日志
import adminlog from 'components/power/log/adminlog'
//@yanchaochao systemlog 系统处理日志
import systemlog from 'components/power/log/systemlog'



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
      {path:'/account', component: account, name: 'account',alias:'/resources/account/viewInfo'},
    {
      path: '/account/frozen',
      name: 'frozen',
      alias:'/resources/account/inuse/list',
      component: frozen
    },
    {
      path: '/account/detailed',
      name: 'detailed',
      alias:'/resources/account/payDetail/list',
      component: detailed
    },
    {
      path: '/trade/prepay',
      name: 'prepay',
      alias:'/resources/prePay/charge/list',
      component: prepay
    },
    {
      path: '/trade/recharge',
      name: 'recharge',
      alias:'/resources/account/charge/list',
      component: recharge
    },
    {
      path: '/trade/betting',
      name: 'betting',
      alias:'/resources/betRecord/list',
      component: betting
    },
    {
      path: '/trade/prize',
      name: 'prize',
      alias:'/resources/award/return/list',
      component: prize
    },
    {
      path: '/trade/withdraw',
      name: 'withdraw',
      alias: '/resources/cash/list',
      component: withdraw
    },
    {
      path: '/recon/integral',
      name: 'integral',
      alias:'/resources/task/baaRecon/list',
      component: integral
    },
    {
      path: '/recon/cncolor',
      name: 'cncolor',
      alias:'/resources/task/gctRecon/list',
      component: cncolor
    },
    {
      path: '/diff/diffintegral',
      name: 'diffintegral',
      alias:'/resources/account/baa/diff/list',
      component: diffintegral
    },
    {
      path: '/diff/diffcncolor',
      name: 'diffcncolor',
      alias:'/resources/account/gct/diff/list',
      component: diffcncolor
    },
    {
      path: '/pay/mesoseries',
      name: 'mesoseries',
      alias:'/resources/prepay/boc/list',
      component: mesoseries
    },
    {
      path: '/pay/silver',
      name: 'silver',
      alias:'/resources/prepay/zyt/list',
      component: silver
    },
    {
      path: '/channel/channel',
      name: 'channel',
      alias:'/resources/dealer/list',
      component: channel
    },
    {
      path: '/power/user/adduser',
      name: 'adduser',
      component: adduser,
      alias: '/resources/role/list'
    },
     {
      path: '/power/user/permissionquery',
      name: 'permissionquery',
      alias:'/resources/role/func/list',
      component: permissionquery
    },
    {
      path: '/power/user/RoleManagement',
      name: 'RoleManagement',
      alias:'/resources/role/list',
      component: RoleManagement
    },
    {
      path: '/power/user/RoleRightsManagement',
      name: 'RoleRightsManagement',
      alias:'/resources/role/normal/list',
      component: RoleRightsManagement
    },
    {
      path: '/power/user/RoleRightsSearch',
      name: 'RoleRightsSearch',
      alias:'/resources/role/func/list',
      component: RoleRightsSearch
    },
    {
      path: '/power/user/UserRightsManagement',
      name: 'UserRightsManagement',
      alias:'/resources/user/list',
      component: UserRightsManagement
    },
    {
      path: '/power/user/UserRightsSearch',
      name: 'UserRightsSearch',
      alias:'/resources/user/func/list',
      component: UserRightsSearch
    },
    {
      path: '/power/user/resetPassword',
      name: 'resetPassword',
      alias:'/resources/user/resetpwd/list',
      component: resetPassword
    },
    {
      path: '/power/user/newPassword',
      name: 'newPassword',
      alias:'/resources/user/updatePassword',
      component: newPassword
    },
    {
      path: '/power/log/adminlog',
      name: 'adminlog',
      alias:'/resources/log/user/list',
      component: adminlog
    },
    {
      path: '/power/log/systemlog',
      name: 'systemlog',
      alias:'/resources/log/sys/list',
      component: systemlog
    },

     {
      path: '/power/user/test',
      name: 'test',
      component: test
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
