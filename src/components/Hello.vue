<template>
<div class="wrap">
  <div class="header" id="header">
     <input type="text" class="search" placeholder="搜索">
     <a class="bolt"></a>
  </div>
  <div class="content">
    <ul>
      <li v-for="item in items">
        <div class="text-column">
          <div class="username">
            <h4><a class="title" href="#"></a>来自话题:军事</h4>
            <a class="close">×</a>
          </div>
          <div class="info-images">
            <img :src="item['imgs']">
          </div>
          <p class="title-primary">{{item['newsTitle']}}</p>
          <p class="title-small">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。。</p>
          <div class="review-area">
            <a class="good">{{good}}赞</a>
            <a class="comment">{{comment}}评论</a>
            <a class="page">去往专栏</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
// import Shop from './Shop'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scroll: '',
      head: '',
      num:10,
      good: 2360,
      comment: 494,
      news:'',
      items:[
        {newsTitle:'',imgs:''},
        {newsTitle:'',imgs:''},
        {newsTitle:'',imgs:''},
        {newsTitle:'',imgs:''},
        {newsTitle:'',imgs:''},
        {newsTitle:'',imgs:''},
        {newsTitle:'',imgs:''}
      ],
      newsList:''
    }
  },
  methods:{
    /*menu() {
      this.scroll = document.body.scrollTop;
      var head = document.getElementById('header');
      var inp = head.getElementsByTagName('input');
      var bolt = head.getElementsByTagName('a');
      var timer;
      var timer2;
      if(this.scroll>=50){
        clearInterval(timer2);
        timer = setInterval(function(){
          head.style.height=head.offsetHeight-10+'px';
          inp[0].style.display='none';
          bolt[0].style.display='none';
          if(head.offsetHeight<=0){
            clearInterval(timer);
            head.style.height='0';
          }
        },500)
      }
      if(this.scroll<=50){
        clearInterval(timer);
        timer2 = setInterval(function(){
          head.style.height=head.offsetHeight+10+'px';
          inp[0].style.display='block';
          bolt[0].style.display='block';
          if(head.offsetHeight>=50){
            clearInterval(timer2);
            head.style.height='50px';
          }
        },500)
      }
      
    }*/
  },
  mounted() {
   window.addEventListener('scroll', this.menu)
  },
  created: function() {
      this.$http.post('http://wangyi.butterfly.mopaasapp.com/news/api?type=war&page=1&limit=10')
      .then(function(response){ 
        this.news = response.bodyText;
        console.log(JSON.parse(this.news)['list'][0]['title']);
        for(var i = 0;i<this.news.length;i++){
          // this.items.push('{newsTitle:'+JSON.parse(this.news)['list'][i]['title']+'}');
           this.items[i].newsTitle = JSON.parse(this.news)['list'][i]['title'];
           this.items[i].imgs = JSON.parse(this.news)['list'][i]['imgurl'];
        }
      }, function(response){
        console.log(response);    
      });
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
    box-shadow: 0 2px 2px #ccc;
  }
  .search{
    float: left;
    width: 70%;
    height: 40px;
    background: url(../assets/header-images/search.png) 10px center no-repeat;
    background-size: 20px;
    background-color: #48a3ea;
    border:none;
    outline: none;
    margin: 5px 0 0 5px;
    padding-left: 12%;
    color: #ccc;
  }
  .bolt {
    float: right;
    width: 10%;
    height: 40px;
    background: url(../assets/header-images/bolt.png) left center no-repeat;
    background-size: 20px;
    margin: 5px 5px 0 0;
  }
  .content {
    width: 100%;
    height: auto;
    background-size: 100%;
    padding-top:56px;
    padding-bottom: 50px;
    background-color: #fff;
  }
  .text-column {
    overflow: hidden;
    padding: 14px 12px;
    box-shadow: 0 1px 1px 1px #ddd;
    margin-bottom: 10px;
  }
  .username {
    overflow: hidden;
    margin-bottom: 10px;
  }
  .text-column h4 {
    float: left;
    text-align: left;
    line-height: 22px;
    color: grey;
  }
  .text-column .title {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 0px;
    background: #ccc;
    border-radius: 50%;
    margin-right: 6px;
  }
  .close {
    float: right;
    font-size: 20px;
    color: #ccc;
  }
  .info-images {
    overflow: hidden;
    width: 100%;
    height: 120px;
    border-radius: 6px;
  }
  .info-images img {
    display: block;
    width: 100%;
  }
  .text-column p {
    text-align: left;
  }
  .title-primary {
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .title-small {
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    word-wrap: nowrap;
  }
  .review-area {
    overflow: hidden;
    margin-top: 10px;
  }
  .review-area a {
    float: left;
    color: #aaa;
  }
  .review-area .good:after,
  .review-area .comment:after {
    content: "·"
  }
}
</style>
