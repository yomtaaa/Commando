<template>
<div class="column3">
  <div class="header">
     <h1>更多</h1>
  </div>
  <div class="content">
    <div class="index">
      <a class="article-user"><img src="../assets/timg.jpg"></a>
      <div class="user-info">
          <span>YOMTAAA</span>
          <span class="editor">查看或编辑个人主页</span>
      </div>
    </div>
    <ul class="more-nav">
      <li v-for="item in items">
        <a class="nav-icon"></a>
        <a class="nav-text">{{item.navName}}</a>
      </li>
    </ul>
    <ul class="more-nav">
      <li v-for="item2 in items2">
        <a class="nav-icon"></a>
        <a class="nav-text">{{item2.navName}}</a>
      </li>
    </ul>
    <ul class="more-nav">
      <li v-for="item3 in items3">
        <a class="nav-icon"></a>
        <a class="nav-text">{{item3.navName}}</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'photo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js 3',
      items:[
        {navName:'我的关注'},
        {navName:'我的收藏'},
        {navName:'我的草稿'},
        {navName:'最近浏览'}
      ],
      items2:[
        {navName:'已购内容'},
        {navName:'我的书架'},
        {navName:'我的Live'},
        {navName:'我的值乎'}
      ],
      items3:[
        {navName:'夜间模式'},
        {navName:'设置'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-height: 375px) {
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #1d8ae9;
    position: fixed;
    top: 0;
  }
  .content {
    width: 100%;
    height: auto;
    background-size: 100%;
    padding-top:50px;
  }
  .column3 {
    padding-bottom: 50px;
  }
  .header h1 {
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    margin-left: 10px;
    letter-spacing: 2px;
  }
  .index {
    overflow: hidden;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
    margin: 4px 0 6px 0;
    box-shadow: 0 1px 1px 1px #ddd;
  }
  .user-info {
    float: left;
    width: 80%;
    height: 40px;
    margin-left: 10px;
  }
  .user-info span {
    display: block;
    font-size: 16px;
    text-align: left;
  }
  .user-info .editor {
    color: #ddd;
  }
  .more-nav {
    overflow: hidden;
    width: 100%;
    height: auto;
    margin: 0 0 6px 0;
    box-shadow: 0 1px 1px 1px #ddd;
  }
  .more-nav li {
    overflow: hidden;  
    padding-left: 10px;
  }
  .more-nav li:last-child a{
    border: none;
  }
  .more-nav a {
    color: #888;
  }
  .nav-icon {
    float: left;
    width: 10%;
    height: 60px;
    background: url(../assets/footer-images/link.png) left center no-repeat;
    background-size: 28px;
  }
  .nav-text {
    float: right;
    width: 90%;
    height: 60px;
    line-height: 60px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
}
</style>