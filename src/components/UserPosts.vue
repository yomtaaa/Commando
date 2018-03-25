<template>
  <div class="notice-column1">
    <div class="unread">
      <span>{{num}} 条未读</span>
      <a class="ok"></a>
    </div>
    <ul class="article">
      <li v-for="item in items">
        <a class="article-user"><img src="../assets/timg.jpg"></a>
        <div class="article-text">
          <span>{{item.user+' 赞同了你的回答'}}</span>
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
      num:3,
      items: [
        {user:'csd998',message: 'JavaScript和PHP两种编程语言哪个设计得更好（差）一点？' },
        {user:'csd998',message: '关于向量的一些小问题' }
      ]
    }
  }
}
</script>

<style>
@media screen and (min-height: 375px) {
}
</style>
