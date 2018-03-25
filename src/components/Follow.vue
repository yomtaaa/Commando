<template>
  <div class="notice-column1">
    <div class="unread">
      <span>{{num}} 条未读</span>
      <a class="ok"></a>
    </div>
    <ul class="article">
      <li v-for="item in items">
        <a class="article-user"><img src="../assets/timg.jpg"></a>
        <div class="article-text user-text">
          <span class="user">{{item.user}}</span>
          <p>{{item.message}}</p>
        </div>
        <a :class="item.OFF?'follow':'follow follow-active'">{{item.followText}}</a>
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
      num:0,
      items: [
        {user:'无业游民',message: '迈向QD',followText:'关注',OFF:false },
        {user:'csd998',message: '前端工程师',followText:'互相关注',OFF:true },
        {user:'YOMTAAA',message: '前端小萌新',followText:'互相关注',OFF:true }
      ]
    }
  }
}
</script>

<style>
@media screen and (min-height: 375px) {

  .user-text {
    overflow: hidden;
    width: 40%;
  }
  .user {
    font-size: 16px;
  }
  .follow {
    float: right;
    width: 50px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    color: #999;
    text-align: center;
    background: #ddd;
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 7px 14px 0 0;
  }
  .follow-active {
    color: #1d8ae9;
    background-color: #fff;
    border: 1px solid #1d8ae9;
  }
}
</style>
