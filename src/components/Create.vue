<template>
  <div class="createContent">
    <div class="block">
      <label>标题：</label>
      <el-input v-model="article.title" ></el-input>
    </div>
    <div class="block">
      <label>主题：</label>
      <el-input v-model="article.theme" ></el-input>
    </div>
    <mavon-editor :ishljs="true" v-model="article.content"  @save="save" />
    <el-button @click="confirm" >提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'createContent',
  data () {
    return {
      flag: false,
      value: "",
      article: {
        title: '',
        theme: '',
        content: ''
      }
    }
  },
  methods: {
    save (value,render) {
      this.article.content = render
    },
    confirm () {
      let {article} = this
      this.$http.post('api/createArticle',{
        b_user: '000',
        title: article.title,
        theme: article.theme,
        content: article.content
      })
      .then((res) => {
        if(res.data.length>0){
          console.log(res.data)
          this.flag = true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.createContent {
  margin: 100px auto;
  width: 80%;
  padding: 2% 4%;
}
.block {
  margin-bottom: 40px;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  position: relative;
}
.el-input {
  width: 90%;
  position: absolute;
  right: 0;
}
</style>
