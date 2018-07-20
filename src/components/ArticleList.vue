<template>
  <div class="articleListContent">
    <h1 v-if="show">标签&nbsp;<a href="javascript:void(0)">{{tag}}</a>&nbsp;下的文章</h1>
    <ul v-if="flag">
      <li v-for="a in articleList" class="item" :key="a.a_id">
        <router-link :to="'/article/'+a.a_id"><h2 class="title">{{a.title}}</h2></router-link>
        <div class="creaT">{{new Date(+new Date(a.createDate)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}}</div>
        <p class="theme">{{a.theme}}</p>
        <router-link :to="'/article/'+a.a_id">阅读更多 >></router-link>
      </li>
    </ul>
    <div class="noArticle" v-if="!flag">
      o(╥﹏╥)o &nbsp; &nbsp;博主还没有写文章呢~~
    </div>
  </div>
</template>

<script>
export default {
  name: 'articleListContent',
  data () {
    return {
      flag: true,
      show: false,
      tag: '',
      articleList: []
    }
  },
  watch: {
    "$route": "getContent"
  },
  beforeMount() {
      this.getContent()
  },
  methods: {
    getContent () {
      let c_id = this.$route.params.c_id
      if(c_id===undefined){
        this.$http.get('api/getArticleList' + new Date().getTime(),{ params:{id:'000'}})
        .then((res) => {
          if(res.data.length>0){
            this.articleList = res.data
            this.show = false
          }
          else{
            this.flag = false
          }
        })
      }
      else {
        this.$http.get('api/Tag/getTagArti' + new Date().getTime(),{ params:{c_id: c_id}})
        .then((res) => {
          if(res.data.length>0){
            this.articleList = res.data
            this.show = true
            this.tag = sessionStorage.getItem("selectedTag")
          }
          else{
            this.flag = false
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item:first-child {
  border-top: none;
}
.item {
  list-style: none;
  text-align: left;
  border-top: 1px solid #ddd;
  padding: 0 0px 30px 30px;
  margin: 0 50px 0 10px;
}

.item a:last-child {
  color: #2479cc
}
.item a:last-child:hover {
  color: #242fcc
}
.noArticle {
  margin: 200px auto;
  font-size: 34px;
  font-weight: bold;
}
.creaT {
  float: right;
  position: relative;
  top: -60px;
  width: 20%;
}
h1 {
  font-size: 32px;
  background-color: #f6f9fa;
  color: #999;
  padding: 30px 0;
  margin: 0px 0 20px 0;
}
h2 {
  font-size: 28px;
  width:80%;
}
h1>a{
  color: #4579cc;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #4579cc
}
</style>
