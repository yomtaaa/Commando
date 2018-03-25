import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello.vue'
import Find from './components/Find.vue'
import Notice from './components/Notice.vue'
import Link from './components/Link.vue'
import More from './components/More.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'
import Follow from './components/Follow.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path: '/find',
      component: Find
    },{
      path: '/notice',
      component: Notice,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'follow',
          component: Follow
        }
      ]
    },{
      path: '/letter',
      component: Link
    },{
      path: '/more',
      component: More
    }
  ]
})
