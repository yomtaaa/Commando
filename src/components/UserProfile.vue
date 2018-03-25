<template>
  <div class="notice-column1">
    <div class="unread">
      <span>{{num}}条未读</span>
      <a class="ok"></a>
    </div>
    <ul class="article">
      <li v-for="item in items">
        <a class="article-user"><img src="../assets/timg.jpg"></a>
        <div class="article-text">
          <span>{{msg+' 新增了文章'}}</span>
          <p>{{item.message}}</p>
        </div>
      </li>
    </ul>
    <span class="no-content">没有更多内容</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      msg:123,
      num:57,
      items: [
        {message: 'SpringCloud: 注册中心Eureka' },
        {message: '实战kotlin@android(三)：扩展变量与其它技巧' }
      ]
    }
  }
}
</script>

<style>
@media screen and (min-height: 375px) {
  .notice-column1 {
    padding-bottom: 50px;
  }
  .unread {
    height: 40px;
    line-height: 40px;
    background-color: #f0f4f7;
  }
  .unread span {
    float: left;
    color: #999;
    text-align: left;
    margin-left: 10px;
  }
  .unread .ok {
    float: right;
    width: 24px;
    height: 24px;
    background: url(../assets/yes.png) 0 0 no-repeat;
    background-size: 24px;
    margin: 8px 10px 0 0;
  }
  .article {
    overflow: hidden;
  }
  .article li {
    overflow: hidden;
    border-bottom: 1px solid #eee;
    padding: 15px 0 15px 15px;
  }
  .article-user {
    float: left;
    width: 10%;
    
  }
  .article-user img {
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
  .article-text {
    float: left;
    width: 80%;
    margin-left: 16px;
    font-size: 12px;
    text-align: left;
  }
  .article-text p {
    font-size: 16px;
    margin-top: 4px;
  }
  .no-content {
    display: block;
    text-align: center;
    margin: 10px 0;
    color: #aaa;
  }
}
</style>
