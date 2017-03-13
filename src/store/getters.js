//定义一个数count
export const getcount = state => {
    return state.count
}
//侧边栏
export const getsidebar = state => {
    return state.sidebar
}
//菜单
export const menuitems = state =>{
    return state.menuitems
}
//得到列表
export const getlist = state => {
  return state.list
}
// 增加角色
export const getTableData = state => {
  return state.tableData
}

// 增加角色
export const getArray = state => {
  return state.ArrayList
}

// 增加角色参数
export const getParams = state => {
  return state.paramsStore
}
//@su 创建角色公共状态
export const getSuccess= state => {
  return state.success_message
}
//@su 修改角色状态
export const getmodifMessage= state => {
  return state.modify_message
}
// @su 角色管理修改信息
export const getModifyInfo= state => {
  return state.ModifyInfo
}
// @su code转换名字
export const getName= state => {
  return state.name
}
// @su getpage分页公共参数
export const getPage= state => {
  return state.page
}
