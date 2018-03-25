<template>
<div class="column2">
  <div class="header">
     <h1>发现</h1>
  </div>
  <div class="content">
    <div class="banner-tab">
      <div class="banner">
        <img src="../assets/timg.jpg">
      </div>
      <ul class="tab">
        <li><a class="tab-icon special-column">专栏</a></li>
        <li><a class="tab-icon live">Live</a></li>
        <li><a class="tab-icon book">书店</a></li>
        <li><a class="tab-icon collection">收藏夹</a></li>
        <li><a class="tab-icon round-table">圆桌</a></li>
      </ul>
    </div>
    <div class="hot-column">
      <div class="hot-event">
        <h3>热门事件</h3>
        <p>大家正在关注和讨论的内容</p>
      </div>
      <div class="hot-event">
        <h3>Google I/O 完整盘点</h3>
        <div class="hot-event-bar">
          <img src="../assets/timg.jpg">
        </div>
        <p>这才是地球上最[性感]的发布会</p>
      </div>
    </div>
    <div class="hot-content banner-tab">
      <div class="hot-event">
        <h3>热门内容</h3>
        <p>24小时内热门回答及文章</p>
      </div>
      <div class="hot-event hot-text">
        <h3>内心强大的人，才敢看这10部让人绝望的电影</h3>
        <p class="text">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。</p>
        <div class="review-area">
          <a class="good">{{good}}赞</a>
          <a class="comment">{{comment}}评论</a>
          <a class="page">去往专栏</a>
        </div>
      </div>
      <div class="hot-event hot-text">
        <h3>内心强大的人，才敢看这10部让人绝望的电影</h3>
        <p class="text">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。</p>
        <div class="review-area">
          <a class="good">{{good}}赞</a>
          <a class="comment">{{comment}}评论</a>
          <a class="page">去往专栏</a>
        </div>
      </div>
      <div class="hot-event hot-text">
        <h3>内心强大的人，才敢看这10部让人绝望的电影</h3>
        <p class="text">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。</p>
        <div class="review-area">
          <a class="good">{{good}}赞</a>
          <a class="comment">{{comment}}评论</a>
          <a class="page">去往专栏</a>
        </div>
      </div>
      <a class="more-hot-content">查看全部热门内容</a>
    </div>
    <div class="hot-content banner-tab">
      <div class="hot-event">
        <h3>编辑推荐</h3>
        <p>24小时内热门回答及文章</p>
      </div>
      <div class="hot-event hot-text">
        <h3>内心强大的人，才敢看这10部让人绝望的电影</h3>
        <p class="text">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。</p>
        <div class="review-area">
          <a class="good">{{good}}赞</a>
          <a class="comment">{{comment}}评论</a>
          <a class="page">去往专栏</a>
        </div>
      </div>
      <div class="hot-event hot-text">
        <h3>内心强大的人，才敢看这10部让人绝望的电影</h3>
        <p class="text">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。</p>
        <div class="review-area">
          <a class="good">{{good}}赞</a>
          <a class="comment">{{comment}}评论</a>
          <a class="page">去往专栏</a>
        </div>
      </div>
      <div class="hot-event hot-text">
        <h3>内心强大的人，才敢看这10部让人绝望的电影</h3>
        <p class="text">这是一篇在你们阅读旗舰的荒野之息评论文（很快会有）前，应该预先阅读的准备知识。</p>
        <div class="review-area">
          <a class="good">{{good}}赞</a>
          <a class="comment">{{comment}}评论</a>
          <a class="page">去往专栏</a>
        </div>
      </div>
      <a class="more-hot-content">查看全部编辑推荐</a>
    </div>
    <!--<div class="hot-content banner-tab">
      <div class="hot-event">
        <h3>热门话题</h3>
        <a class="more">查看更多</a>
        <p>正在发生和讨论的热门话题</p>
      </div>
      <div class="slider-tab">
        <ul class="slider-tab-box" id="slider-tab-box">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>-->
  </div>
</div>
</template>

<script>
export default {
  name: 'find',
  data () {
    return {
      msg: 'Welcome to Your Vue.js',
      good: 2360,
      comment: 494
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
    padding-bottom: 50px;
    background-color: #fff;
  }
  .header h1 {
      font-size: 18px;
      font-weight: 400;
      text-align: left;
      margin-left: 10px;
      letter-spacing: 2px;
  }
  .banner-tab {
    box-shadow: 0 1px 1px 1px #ddd;
    margin-top: 10px;
  }
  .banner {
    overflow: hidden;
    width: 100%;
    height: 140px;
  }
  .banner img {
    display: block;
    width: 100%;
  }
  .tab {
    overflow: hidden;
    width: 100%;
    padding-top: 10px;
  }
  .tab li {
    float: left;
    width: 20%;
    height: 60px;
  }
  .tab .tab-icon {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 90px;
    font-size: 10px;
  }
  .tab .special-column {
    background: url(../assets/Find/book_tab.png) top center no-repeat;
  }
  .tab .live {
    background: url(../assets/Find/bolt.png) top center no-repeat;
  }
  .tab .book {
    background: url(../assets/Find/book.png) top center no-repeat;
  }
  .tab .collection {
    background: url(../assets/Find/star.png) top center no-repeat;
  }
  .tab .round-table {
    background: url(../assets/Find/ok.png) top center no-repeat;
  }
  .hot-content .more {
    float: right;
  }
  .hot-column {
    width: 100%;
    box-shadow: 0 1px 1px 1px #ddd;
    margin-top: 10px;
  }
  .hot-event {
    overflow: hidden;
    width: 90%;
    text-align: left;
    border-bottom: 1px solid #eee;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .hot-event h3,
  .hot-event p {
    display: inline-block;
    width: 60%;
  }
  .hot-event p {
    color: #999;
    margin-top: 6px;
  }
  .hot-column .hot-event:last-child {
    border: none;
  }
  .hot-event-bar {
    overflow: hidden;
    float: right;
    width: 34%;
    height: 80px;
    border-radius: 6px;
  }
  .hot-event-bar img {
    display: block;
  }
  .hot-text h3,
  .hot-text p {
    width: 100%;
  }
  .hot-text .text {
    color: #000;
    margin-top: 10px;
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
  .more-hot-content {
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #1d8ae9;
  }
  .slider-tab {
    overflow: hidden;
    width: 100%;
    height: 60px;
    position: relative;
    margin-top: 10px;
  }
  .slider-tab .slider-tab-box {
    width: 1000px;
    position: absolute;
    top: 0;
  }
  .slider-tab-box li {
    float: left;
    width: 60px;
    height: 60px;
    background: #77cc00;
    margin-left: 15px;
    border-radius: 6px;
  }
}
</style>