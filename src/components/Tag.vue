
<template>
  <div class="tagContent">
    <h1>标签</h1>
    <section>
      <ul>
        <li v-for="t in tag" :key="t.c_id" >
          <router-link @click.native="save(t.title)"  :to="'tag/'+t.c_id" v-if="!flag">
            <el-tag size="medium" :class="{adminTag: flag}" :closable="flag" @close="delTag(t.title)" >
              {{t.title}}&nbsp;({{t.count}})
            </el-tag>
          </router-link>
          <el-tag size="medium" :class="{adminTag: flag}" :closable="flag" @close="delTag(t.title)" v-else>
            <router-link @click.native="save(t.title)"  :to="'tag/'+t.c_id">
              {{t.title}}&nbsp;({{t.count}})
            </router-link>
          </el-tag>
        </li>
        <li v-if="flag" class="addKeyframe">
          <el-input v-if="isAdd" v-model="value" @keyup.enter.native="enter"></el-input>
          <el-button v-if="!isAdd" @click.native="addTag" class="adminTag"  type="button">
            <a>+ 添加新标签</a>
          </el-button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'tagContent',
  data () {
    return {
      value: '',
      isAdd: false,
      flag: false,
      tag: {}
    }
  },
  created() {
      this.flag = this.$store.state.login.isLogin
      console.log(this.flag)
      this.$http.get('api/getTag' + new Date().getTime(),{ params:{b_user:'000'}})
      .then((res) => {
        if(res.data.length>0){
          this.tag = res.data
        }
      })
  },
  methods: {
    save (title) {
      sessionStorage.setItem("selectedTag",title)
    },
    addTag () {
      this.isAdd = true
    },
    delTag (title) {
      this.$http.post('api/tag/delTag' ,{b_user:'000',title:title})
      .then((res) => {
        console.log(res)
        if(res.data.flag){
          this.tag = this.tag.filter(function(item){
            return item.title != title
          })
        }
      })
    },
    enter () {
      this.$http.post('api/tag/addTag' ,{b_user:'000',title:this.value})
      .then((res) => {
        console.log(res)
        if(res.data.flag){
          this.isAdd = false
          this.tag.push({title: this.value, count: 0})
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.tagContent {
  margin: 10px auto;
  width: 80%;
  text-align: left;
}
.tagContent>section>ul{
  padding: 0;
  margin: 0;
}
.tagContent>section>ul>li {
  list-style: none;
  display: inline-block;
  margin: 40px 40px 50px 0px;
  position:relative;
}
.tagContent>section>ul>li:nth-child(odd){
	-webkit-animation: move 1s linear forwards;
  animation: move 1s linear forwards;
}
.tagContent>section>ul>li:nth-child(even){
	-webkit-animation: move2 1s linear forwards;
  animation: move2 1s linear forwards;
}
.addKeyframe{
	-webkit-animation: none !important;
  animation: none !important;
}
.el-tag--medium {
  height: 50px;
  line-height: 50px;
  border: 2px solid rgb(55, 198, 192);
  border-radius: 18px;
  font-size: 20px;
  color: rgb(208, 233, 255);
  background-color: rgb(55, 198, 192);
  padding: 0px 20px;
}

.el-tag--medium:hover{
  opacity: 0.5;
}
.adminTag {
  height: 50px;
  line-height: 50px;
  background-color: rgb(14, 14, 14);
  border: 2px solid rgb(14, 14, 14);
  border-radius: 18px;
  font-size: 20px;
  color: rgb(208, 233, 255);
  padding: 0px 20px;
}
.adminTag:hover{
  opacity: 0.5;
}
@keyframes move{
	0%{right: -675px; transform:rotate(0deg);}
	100%{right: 0px; transform:rotate(360deg);}
}

@-webkit-keyframes move{
	0%{right: -675px; -webkit-transform:rotate(0deg);}
	100%{right: 0px; -webkit-transform:rotate(360deg);}
}

@keyframes move2{
	0%{left: -675px; transform:rotate(360deg);}
	100%{left: 0px; transform:rotate(0deg);}
}

@-webkit-keyframes move2{
	0%{left: -675px; -webkit-transform:rotate(360deg);}
	100%{left: 0px; -webkit-transform:rotate(0deg);}
}
a {
  text-decoration: none;
  color: rgb(208, 233, 255);
}
</style>
