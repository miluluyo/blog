<template>
  <div>
    <h2 style="text-align:center;">友情链接</h2>
    <h6 style="text-align:center;color:#6a8bad">展示本站所有友情站点，排列不分先后，均匀打乱算法随机渲染的喔！</h6>
    <div class="" style="display: flex;flex-wrap: wrap;justify-content: space-between;margin-bottom:1.5rem;margin-top:1.5rem">
      <div class="unionbox" v-for="item in shuffle">
        <!-- <img v-lazy="item.avatar" alt="" class="avatar"> -->
        <div class="info">
          <div class="headimg">
            <img v-lazy="item.headurl" alt="">
          </div>
          <div class="content">
            <h3 class="title">{{item.name}}</h3>
            <p class="desc">{{item.introduction}}</p>
            <a class="btn" target="_black" :href="item.url">直达</a>
          </div>
        </div>
      </div>
    </div>
    <hr style="position: relative;margin: 1rem 0;border: 2px dashed #b8dcfd;width: calc(100%);height: 0;">
    <h2 style="text-align:center;">join us</h2>
    <h6 style="text-align:center;color:#6a8bad">如需友链，请添加微信（s978761）告知，格式如下</h6>
    <table class="table" style="margin:0 auto;">
      <tr>
        <th><b>字段</b></th>
        <th><b>字义</b></th>
      </tr>
      <tr v-for="item in details">
        <td>{{item.field}}</td>
        <td>{{item.literal}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unionbox: [{
        // "avatar":"/union/o_myblog.jpg",
        "name":"麋鹿鲁哟",
        "introduction":"大道至简，知易行难。",
        "url":"https://www.cnblogs.com/miluluyo/",
        "headurl":"/union/o_my.jpg"
      },{
        "name":"echo丶若梦",
        "introduction":"面朝大海，春暖花开。",
        "url":"https://ght5935.github.io/",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_o_hexo.jpg"
      },{
        "name":"pingan8787",
        "introduction":"可爱的JavaScript，学起来更开心",
        "url":"http://www.pingan8787.com:3600/",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_o_pingan.jpg"
      },{
        "name":"老人与海……鲜",
        "introduction":"极简主义，励志全栈。",
        "url":"http://mhreading.com/",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_haixian.jpg"
      },{
        "name":"小小咸鱼YwY",
        "introduction":"想是没用的,要动起来。",
        "url":"https://www.cnblogs.com/pythonywy/",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_xxxy.png"
      },{
        "name":"文渊博客",
        "introduction":"一个90后程序员，终身学习者。",
        "url":"https://www.wenyuanblog.com/",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_avatar.png"
      },{
        "name":"迎风而来",
        "introduction":"python之禅从入门到跑路。",
        "url":"https://www.cnblogs.com/sui776265233/",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_yfel.png"
      },{
        "name":"GShang",
        "introduction":"Stay hungry，Stay foolish 。",
        "url":"https://www.cnblogs.com/gshang",
        "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_GShang.png"
      },{
      "name":"好久不见",
      "introduction":"靡不有初，鲜克有终",
      "url":"http://ruraltech.cn",
      "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_hjbj.jpg"
      },{
      "name":"HEOI-动动",
      "introduction":"你若盛开，清风自来。",
      "url":"https://www.cnblogs.com/wzc521/",
      "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_dd.png"
      },{
      "name":"钦の念",
      "introduction":"喜欢白日梦，偶尔假正经。",
      "url":"https://qinnian.xyz/",
      "headurl":"https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_qn.png"
      },{
      "name":"残梦",
      "introduction":"前端丶JS",
      "url":"https://shtodream.cn",
      "headurl":"https://cdn.jsdelivr.net/gh/2662419405/CDN@1.0/sh.jpg"
      },{
      "name":"lucifer的网络博客",
      "introduction":"一个脑洞很大的程序员。",
      "url":"https://lucifer.ren/blog/",
      "headurl":"https://tva1.sinaimg.cn/large/006tNbRwly1ga7ognflh9j30b40b4q3w.jpg"
      },{
      "name":"Areds",
      "introduction":"不忘初心，方得始终。",
      "url":"https://www.cnblogs.com/areds",
      "headurl":"https://pic.cnblogs.com/face/1743713/20190913084704.png"
      },{
      "name":"Evan blog",
      "introduction":"积跬步以至千里，喜欢学习喜欢你。",
      "url":"https://xugaoyi.com/",
      "headurl":"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg"
      }],
       details:[//{
      //     field: 'avatar',
      //     literal: '详情图片地址',
      //   },
        {
          field: 'name',
          literal: '昵称',
        },{
          field: 'introduction',
          literal: '标语',
        },{
          field: 'url',
          literal: '链接地址',
        },{
          field: 'headurl',
          literal: '头像地址',
        }]
    };
  },
  computed:{
    shuffle() {
      var array = this.unionbox
      var m = array.length,
          t, i;
      while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
      }
      return array;
    }
  },
  methods: {
  },
  mounted(){

  }
};
</script>
<style>
.unionbox{margin-bottom: 4rem;width: 48%;box-shadow: 0 2px 10px rgba(0,0,0,.2);transition: all .5s;}
.unionbox:hover{transform: scale(1.05);}
.unionbox .headimg{display: inline-block;width: 100px}
.unionbox .content{width: calc(100% - 120px);display: inline-block;}
.headimg img{width: 75px;height: 75px;border-radius: 75px;}
.unionbox .avatar{width:100%}
.unionbox .info{margin: 2.5rem 0 1.5rem;padding: 0 0 0.5rem 1.5rem;display: flex;margin-bottom: 0;}
.unionbox h3{margin: 0;max-width: 65%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.unionbox .desc{margin: .6rem 0 1.5rem;}
.unionbox .btn{display: inline-block;background-color: #3eaf7c;color: #fff;border-radius: 2px;padding: 4px 8px;font-size: .7rem;text-decoration: none;cursor: pointer;margin: 0 1.5rem 1.5rem 1.5rem;}
@media (max-width: 719px){.unionbox{width: 100%;}}
.table{width: 100%;display:table;text-align: center;border: none}
.table td{border: none}
tr:nth-child(2n){background: none;}
.table th{border: none;color: rgb(106, 139, 173);}
tr{border-bottom: 1px solid #dfe2e5;border-top: none;}
.unionbox .desc {
    margin: 10px auto;
    text-indent: 0;
}
.unionbox .btn {
    display: inline-block;
    background-color: #3eaf7c;
    color: #fff;
    border-radius: 2px;
    padding: 4px 8px;
    font-size: .7rem;
    text-decoration: none;
    cursor: pointer;
    margin: 0 1.5rem 1.5rem 0rem;
}
</style>