
<template>
  <div class="articleContent">
    <article>
      <h1 class="title">{{article.title}}</h1>
      <div class="uptime">{{new Date(+new Date(article.createDate)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}}</div>
      <p class="theme">{{article.theme}}</p>
      <div class="uptime">{{article.updateDate?"上次编辑于"+new Date(+new Date(article.updateDate)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,''):null}}</div>
      <div class="markdown-body" v-html="article.html"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'articleContent',
  data () {
    return {
      flag: false,
      article: {}
    }
  },
  beforeCreate() {
      this.$http.get('api/getArticle' + new Date().getTime(),{ params:{a_id:this.$route.params.a_id}})
      .then((res) => {
        if(res.data.length>0){
          this.article = res.data[0]
          this.flag = true
        }
      })
  },
  methods: {
    // getValue () {
    //   this.$http.get('api/test')
    //   .then((res) => {
    //     console.log('res', res)
    //     this.articleList = res.data
    //     this.flag = true
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.img-wrap {
  display: block;
  position: relative;
}
.img-wrap>img {
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>
<style scoped>
.articleContent {
  margin: 10px auto;
  width: 80%;
}
article {
  text-align: left;
}
.uptime {
  float: right;
  position: relative;
  top: -60px
}
.title {
  font-size: 40px;
}
.theme {
  font-size: 28px;
  font-weight: bold;
}
@import 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css';

</style>
