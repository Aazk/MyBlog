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
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/articleList',
          name: 'ArticleList',
          alias: '/',
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
          name: 'tagArticleList',
          component: ArticleList
        },
        {
          path: '/article/:a_id',
          name: 'Article',
          component: Article
        },
      ]
    },
    {
      path: '/home_m',
      name: 'Index_m',
      component: Index_m,
      children: [
        {
          path: '/articleList_m',
          name: 'ArticleList_m',
          alias: '/home_m',
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
          name: 'tagArticleList_m',
          component: ArticleList_m
        },
        {
          path: '/article_m/:a_id',
          name: 'Article_m',
          component: Article_m
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children:[
        {
          path: 'create',
          name: 'Create',
          component: Create
        },
        {
          path: 'file',
          name: 'File',
          alias: '/admin',
          component: File
        },
        {
          path: 'tag',
          name: 'Tag',
          component: Tag
        },
        {
          path: 'tag/:c_id',
          name: 'tagArticleList',
          component: ArticleList
        },
        {
          path: '/edit/:a_id',
          name: 'Edit',
          component: Create
        },
      ]
    }
  ]
})
