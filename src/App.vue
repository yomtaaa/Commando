<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer" id="footer">
      <div class="on" @click="active('isA')"><router-link to="/" :class="isA?'index':'index-blue'"></router-link></div>
      <div class="on" @click="active('isA1')"><router-link to="/find" :class="isA1?'find':'find-blue'"></router-link></div>
      <div class="on" @click="active('isA2')"><router-link to="/notice" :class="isA2?'notice':'notice-blue'"></router-link></div>
      <div class="on" @click="active('isA3')"><router-link to="/letter" :class="isA3?'private-letter':'private-letter-blue'"></router-link></div>
      <div class="on" @click="active('isA4')"><router-link to="/more" :class="isA4?'more':'more-blue'"></router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      isA:false,
      isA1:true,
      isA2:true,
      isA3:true,
      isA4:true,
      scroll:''
    }
  },
  methods:{
    active(num) {     
      var oDivBox = document.getElementById('footer');
      var aBtn = oDivBox.getElementsByTagName('a');
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
        case 'isA3': 
          this.isA3=!this.isA3;
          break;
        case 'isA4': 
          this.isA4=!this.isA4;
          break;
      }   
    },
    /*menu() {
      this.scroll = document.body.scrollTop;
      var head = document.getElementById('footer');
      var timera;
      var timerb;
      if(this.scroll>=50){
        clearInterval(timerb);
        head.style.height='50px';
        timera = setInterval(function(){
          head.style.height=head.offsetHeight-10+'px';
          if(head.offsetHeight<=0){
            clearInterval(timera);
            head.style.height='0';
          }
        },500)
      }
      if(this.scroll<=50){
        clearInterval(timera);
        head.style.height='0';
        timerb = setInterval(function(){
          head.style.height=head.offsetHeight+10+'px';
          if(head.offsetHeight>=50){
            clearInterval(timerb);
            head.style.height='50px';
          }
        },500)
      }
      
    }*/
  },
  mounted() {
   window.addEventListener('scroll', this.menu)
  }
}
</script>

<style>
html {height: 100%;}
body {
  height: 100%;
  color: #000;
  font-family: "Helvetica Neue","Helvetica","STHeiTi","sans-serif","Microsoft YaHei","\5fae\8f6f\96c5\9ed1";
  font-size: 14px;
  text-align: center;
}
h1 {font-family: 宋体,sans-serif;}
body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, tr {
  margin: 0 auto;
  padding: 0;
}
input, select {
  font-size: 16px;
  vertical-align: middle;
}
textarea, input {
  word-wrap: break-word;
  word-break: break-all;
  padding:0px;
}
li {list-style-type: none;}
img {border: 0 none;}
a {
  color: #000;
  font-size: 14px;
  text-decoration: none;
}
/*页面布局样式*/
#app {
  overflow: hidden;
  max-width: 640px;
  min-width: 320px;
}
@media screen and (min-height: 375px) {
  .footer {
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #eee;
  }
  .footer .on {
    float: left;
    width: 20%;
  }
  .footer .on a {
    float: left;
    width: 100%;
    height: 50px;
    background-size: 24px;
  }
  .footer .index {
    background: url(assets/footer-images/text.png) center center no-repeat;
  }
  .footer .find {
    background: url(assets/footer-images/compass.png) center center no-repeat;
  }
  .footer .notice {
    background: url(assets/footer-images/notice.png) center center no-repeat;
  }
  .footer .private-letter {
    background: url(assets/footer-images/link.png) center center no-repeat;
  }
  .footer .more {
    background: url(assets/footer-images/more.png) center center no-repeat;
  }
  .footer .index-blue {
    background: url(assets/footer-images/text_blue.png) center center no-repeat;
  }
  .footer .find-blue {
    background: url(assets/footer-images/compass_blue.png) center center no-repeat;
  }
  .footer .notice-blue {
    background: url(assets/footer-images/notice_blue.png) center center no-repeat;
  }
  .footer .private-letter-blue {
    background: url(assets/footer-images/link_blue.png) center center no-repeat;
  }
  .footer .more-blue {
    background: url(assets/footer-images/more_blue.png) center center no-repeat;
  }
}
</style>
