import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Test from '@/components/Test'
import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'
import Create from '@/components/Create'
import File from '@/components/File'
import Tag from '@/components/Tag'
import Index_m from '@/components/mobile/Index_m'
import ArticleList_m from '@/components/mobile/ArticleList_m'
import Article_m from '@/components/mobile/Article_m'
import File_m from '@/components/mobile/File_m'
import Tag_m from '@/components/mobile/Tag_m'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/admin',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Index',
      component: Index,
      redirect: '/articleList',
      children: [
        {
          path: '/articleList',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/file',
          name: 'File',
          component: File
        },
        {
          path: '/tag',
          name: 'Tag',
          component: Tag
        },
        {
          path: '/tag/:c_id',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: '/article/:a_id',
          name: 'Article',
          component: Article
        },
        {
          path: '/create',
          name: 'Create',
          component: Create
        },
      ]
    },
    {
      path: '/home_m',
      name: 'Index_m',
      component: Index_m,
      redirect: '/articleList_m',
      children: [
        {
          path: '/articleList_m',
          name: 'ArticleList_m',
          component: ArticleList_m
        },
        {
          path: '/file_m',
          name: 'File_m',
          component: File_m
        },
        {
          path: '/tag_m',
          name: 'Tag_m',
          component: Tag_m
        },
        {
          path: '/tag_m/:c_id',
          name: 'ArticleList_m',
          component: ArticleList_m
        },
        {
          path: '/article_m/:a_id',
          name: 'Article_m',
          component: Article_m
        }
      ]
    }
  ]
})
