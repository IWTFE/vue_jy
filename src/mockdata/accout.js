import Mock from 'mockjs'
//给投注资金账户管理建立数据
// 投注账号、投注资金账号、身份证号、银行预留手机号。注：四者至少填写一项，精确查询。
const account = []
const accountData = Mock.mock({
  loginUserId: Mock.Random.interber(6,12) //用户登录账号
  betUserId: Mock.Random.interber(15) //投注账号
  accountId: Mock.Random.interger(15) // 投注资金账号
  idCardNo: Mock.Random.integer(15)   // 身份证号
  telephone: Mock.random.interger(11) // 银行预留手机号
})
 //假设有200名用户
 for (let i = 0; i<100; i++) {
   account.push(accountData)
 }
 export {
   account
 }
