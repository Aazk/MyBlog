
<template>
  <div class="file_mContent">
    <h1>归档</h1>
    <div class="file" v-for="(o,i) in data" :key="i">
      <h2>{{o[0].year}}年{{o[0].month>10?o[0].month:'0'+o[0].month}}月</h2>
      <ul>
        <li v-for="(n,j) in o" :key="j">
          <router-link  :to="'/article_m/'+n.a_id">{{n.title}}</router-link>
          <time>{{n.createDate.substring(0,10)}}</time>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'file_mContent',
  data () {
    return {
      flag: false,
      data: ''
    }
  },
  beforeCreate() {
      this.$http.get('api/getFile' + new Date().getTime(),{ params:{b_user:'000'}})
      .then((res) => {
        if(res.data.length>0){
          this.data = res.data
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

<style scoped>
.file_mContent {
  width: 95%;
  text-align: left;
  margin: 0 auto;
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 3.8rem;
}
a, a:hover {
  text-decoration: none;
  color: #2479cc;
  font-size: 2.8rem;
}
time {
  font-style: oblique;
  color: #999;
  margin-left: 20px;
}
.file {
  margin: .9rem 0;
}
ul>li {
  margin: 20px 0;
}
</style>
