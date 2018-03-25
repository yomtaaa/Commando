<template>
<div class="column3">
  <div class="header">
     <ul class="nav" id="nav">
       <li @click="active('isA')"><router-link to="/notice/" :class="isA?'default-nav':'active-nav'">通知</router-link></li>
       <li @click="active('isA1')"><router-link to="/notice/posts" :class="isA1?'default-nav':'active-nav'">赞于感谢</router-link></li>
       <li @click="active('isA2')"><router-link to="/notice/follow" :class="isA2?'default-nav':'active-nav'">关注</router-link></li>
     </ul>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'photo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js 3',
      isA:false,
      isA1:true,
      isA2:true,
    }
  },
  methods:{
    active(num) {     
      var oNav = document.getElementById('nav');
      var oNavLi = oNav.getElementsByTagName('li');
      var This = this;
      for(var i in this.$data){
        this.$data[i]=true;
      }
      switch(num){
        case 'isA': 
          this.isA=!this.isA;
          break;
        case 'isA1':
          this.isA1=!this.isA1;
          break;
        case 'isA2': 
          this.isA2=!this.isA2;
          break;
      }   
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-height: 375px) {
  .header {
    overflow: hidden;
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
    background-color: #fff;
  }
  .nav {
    display: flex;
  }
  .nav li {
    width: 33.33%;
  }
  .nav a {
    display: block;
    height: 48px;
    color: #fff;
  }
  .nav .default {
    border-bottom: 3px solid transparent;
  }
  .nav .active-nav {
    border-bottom: 3px solid #fff;
  }
}
</style>