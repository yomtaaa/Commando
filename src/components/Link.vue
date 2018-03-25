<template>
<div class="column3">
  <div class="header">
     <h1>私信</h1>
  </div>
  <div class="content">
    <ul class="link-list">
      <li v-for="item in items">
        <a class="article-user"><img src="../assets/timg.jpg"></a>
        <div class="article-text">
          <span>{{item.userName}}</span>
          <span class="date">{{item.day}}</span>
          <p>{{item.linkContent}}</p>
        </div>
      </li>
    </ul>
    <span class="no-content">没有更多内容</span>
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
        {userName:'知乎团队',linkContent:'YOMTAAA,2016年是一个神奇的年份我们共同....',day:'4个月前'},
        {userName:'知乎书店团队',linkContent:'亲爱的YOMTAAA，你好,自2013年8月....',day:'4个月前'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-height: 375px) {
  .column3 {
    background: #f0f4f7;
  }
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    position: fixed;
    top: 0;
    background-color: #1d8ae9;
  }
  .header h1 {
      font-size: 18px;
      font-weight: 400;
      text-align: left;
      margin-left: 10px;
      letter-spacing: 2px;
  }
  .content {
    width: 100%;
    background-size: 100%;
    padding-top:50px;
    background-color: #fff;
  }
  .link-list li {
    overflow: hidden;
    padding: 16px 14px;
    border-bottom: 1px solid #eee;
  }
  .link-list span {
    font-size: 16px;
  }
  .link-list .date {
    float: right;
    font-size: 12px;
  }
  .link-list p {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content .no-content {
    display: block;
    text-align: center;
    margin: 14px 0;
    color: #aaa;
  }
}
</style>