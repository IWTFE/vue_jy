<template id="">
  <div class="userDiv">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="2">
        <template slot="title"><span class='icon-user-check iconImg'></span><span class="iconUser">Alexander</span></template>
        <el-menu-item index="2-1"><span class="el-icon-arrow-right"></span>修改密码</el-menu-item>
        <el-menu-item index="2-2"><span class="el-icon-arrow-right"></span>退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
.userDiv{
  float:right;
}
.userDiv .iconImg{
  float:left;
  font-size:22px;
  line-height:60px;
  padding:0 8px;
}
.userDiv .iconUser{
  float:left;
  font-size:16px;
  line-height: 60px;
  padding:0 5px 0 0;
}
.userDiv .el-menu--dark {
    background-color: #e94d5b;
}
.el-menu--horizontal.el-menu--dark .el-menu-item:hover, .userDiv .el-menu--horizontal.el-menu--dark .el-submenu__title:hover {
    background-color: #d83e46;
}
.userDiv .el-menu--horizontal.el-menu--dark .el-submenu__title {
    color: #fff;
}
.userDiv .el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 5px;
    color: #fff;
    margin-top: -3px;
}
.userDiv .el-menu--horizontal .el-submenu>.el-menu{
  border:0;
  padding:0;
  background:red;
  min-width:70%;
  left:50px;
  top:60px;
}
.userDiv .el-menu--horizontal .el-submenu .el-menu-item{
  background:#d83e46;
  border-bottom:1px solid #e94d5b
}
.userDiv .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .userDiv .el-menu-item:hover{
   background:#e94d5b;
   color:#fcfcfc;
   overflow:hidden;
}
.userDiv .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title {
    color: #ffffff;
}
.userDiv .el-icon-arrow-right{font-size:12px;}
.userDiv .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .userDiv .el-menu-item.is-active {
    color: #fff;
}
.userDiv .el-menu--horizontal>.el-menu-item:hover, .userDiv .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .userDiv .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
    border-bottom: 1px solid #e94d5b;
}
</style>
<script>
   export default {
     data(){
       return {
         activeIndex: '1'
       }
     },
     methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   }
 }
</script>
