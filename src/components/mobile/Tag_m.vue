
<template>
  <div class="tag_mContent">
    <h1>标签</h1>
    <section>
      <ul>
        <li v-for="t in tag" :key="t.c_id" >
          <transition name="el-zoom-in-center">
            <router-link @click.native="save(t.title)" class="tag" :to="'tag_m/'+t.c_id" type="button">
              {{t.title}}&nbsp;({{t.count}})
            </router-link>
          </transition>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'tag_mContent',
  data () {
    return {
      flag: false,
      tag: {}
    }
  },
  beforeCreate() {
      this.$http.get('api/getTag' + new Date().getTime(),{ params:{b_user:'000'}})
      .then((res) => {
        if(res.data.length>0){
          this.tag = res.data
          this.flag = true
        }
      })
  },
  methods: {
    save (title) {
      sessionStorage.setItem("selectedTag",title)
    }
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
h1 {
  font-size: 5rem;
}
.tag_mContent {
  margin: 10px auto;
  width: 80%;
  text-align: left;
}
.tag_mContent>section>ul{
  padding: 0;
  margin: 0;
}
.tag_mContent>section>ul>li {
  list-style: none;
  display: inline-block;
  margin: 40px 40px 50px 0px;
  position:relative;
}
.tag_mContent>section>ul>li:nth-child(odd){
	-webkit-animation: move 1s linear forwards;
  animation: move 1s linear forwards;
}
.tag_mContent>section>ul>li:nth-child(even){
	-webkit-animation: move2 1s linear forwards;
  animation: move2 1s linear forwards;
}
.tag{
  border: 2px solid rgb(55, 198, 192);
  border-radius: 18px;
  padding: 20px;
  background-color: rgb(55, 198, 192);
  cursor: pointer;
  font-size: 4rem;
}
.tag:hover{
  opacity: 0.5;
}
a {
  text-decoration: none;
  color: rgb(208, 233, 255);
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
</style>
