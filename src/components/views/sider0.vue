<template>
  <div>
    <button @click='getlist'>tree</button>
    <pre><code>{{this.tree_}}</code></pre>
</div>
</template>
<style media="screen">
@import '~animate.css';
.animated {
  animation-duration: .377s;
}

#sider {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  /*padding: 20px 0 50px;*/
  width: 238px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      tree_:'',
    //   "funcInfoArray": [{
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "funcTitle": "角色管理",
    //       "requestUrl": "/resources/role/list",
    //       "funcType": 0,
    //       "parentFuncId": null,
    //       "order": 1
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e43",
    //       "funcTitle": "角色管理111",
    //       "requestUrl": "/resources/role/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "order": 1
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e44",
    //       "funcTitle": "角色权限管理",
    //       "requestUrl": "/resources/role/normal/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "order": 2
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e45",
    //       "funcTitle": "角色权限查询",
    //       "requestUrl": "/resources/role/func/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "order": 3
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e46",
    //       "funcTitle": "用户权限管理",
    //       "requestUrl": "/resources/user/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "order": 4
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e47",
    //       "funcTitle": "用户权限查询",
    //       "requestUrl": "/resources/user/func/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "order": 5
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e48",
    //       "funcTitle": "重置用户密码",
    //       "requestUrl": "/resources/user/resetpwd/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e41",
    //       "order": 6
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e49",
    //       "funcTitle": "重置用户密码111",
    //       "requestUrl": "/resources/user/resetpwd/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e48",
    //       "order": 7
    //     },
    //     {
    //       "funcId": "43dafb5d39f3481f85dce80c0ee95e50",
    //       "funcTitle": "重置用户密码222",
    //       "requestUrl": "/resources/user/resetpwd/list",
    //       "funcType": 0,
    //       "parentFuncId": "43dafb5d39f3481f85dce80c0ee95e48",
    //       "order": 7
    //     }
    //   ]
    //
    list: [//目录
       {did:1,fid:0,text:'1111'},
       {did:2,fid:1,text:'2222'},
       {did:3,fid:1,text:'3333'},
       {did:4,fid:1,text:'4444'},
       {did:5,fid:3,text:'5555'},
       {did:6,fid:4,text:'6666'},
       {did:7,fid:5,text:'7777'},
       {did:8,fid:3,text:'8888'},
       {did:9,fid:4,text:'9999'},

       //目录下面的人
       {uid:1,did:2,realname:'r111'},
       {uid:2,did:9,realname:'r222'},
       {uid:3,did:2,realname:'r333'},
       {uid:4,did:6,realname:'r444'},
       {uid:5,did:7,realname:'r555'},
       {uid:6,did:8,realname:'r666'},
       {uid:7,did:9,realname:'r777'},

       //或者在同一条记录里面,数据需要先排序保证目录在前面
       {did:10,fid:1,text:'1010',uid:10,realname:'r1010'},
       {did:11,fid:10,text:'1111',uid:11,realname:'r1111'},
       {did:12,fid:11,text:'1212',uid:12,realname:'r1212'},
       {did:13,fid:12,text:'1313',uid:13,realname:'r1313'}
   ]
  }
},
props: {
    show: Boolean
  },
  methods: {
    genTree (list) {
            var temptree = [], tree = [], items = [];
            for (var i in list) {
                if (!temptree[list[i].did]) {
                    var trow = {
                        id: 'z' + list[i].did,
                        did: list[i].did,
                        fid: list[i].fid,
                        text: list[i].text,
                        iconCls: 'im_role',
                        children: []
                    };
                    temptree[list[i].did] = trow;
                    items.push(trow);
                }
                if (list[i].uid > 0) {

                    temptree[list[i].did]['children'].push({
                        id: list[i].uid,
                        text: list[i].realname,
                        iconCls: 'im_user'
                    });
                }
            }

            for (var j in items) {
                if (temptree[items[j].fid]) {
                    temptree[items[j].fid]['children'].push(temptree[items[j].did]);
                } else {
                    tree.push(temptree[items[j].did]);
                }
            }
            temptree = null;
            items = null;
            return tree;

        },
     getlist () {
       var tree = this.genTree(this.list)
       this.tree_=tree
       console.log(tree)
     },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
