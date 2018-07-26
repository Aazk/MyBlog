<template>
<div class="createContent">
    <div class="block">
        <label>标题：</label>
        <el-input v-model="article.title"></el-input>
    </div>
    <div class="block">
        <label>主题：</label>
        <el-input v-model="article.theme"></el-input>
    </div>
    <div class="block">
        <label>标签：</label>
        <el-tag v-for="(t,i) in article.tag" :key="t.c_id" size="medium" closable :disable-transitions="true" @close="handleClose(t,i)">{{t.title}}
        </el-tag>
        <template v-if="tagSelect&&all">
            <el-select v-model="value" size="mini" @change="selected" :loading="loading">
                <el-option v-for="item in tags" :key="item.c_id" :label="item.title" :value="item">
                </el-option>
            </el-select>
        </template>
        <template v-if="!tagSelect&&all">
            <el-button class="button-new-tag" size="mini" @click="getAllTag">+ 添加新标签
            </el-button>
        </template>
    </div>
    <mavon-editor :ishljs="true" v-model="article.markdown" @change="save" />
    <el-button @click="confirm" type="primary">提交</el-button>
</div>
</template>

<script>
export default {
    name: 'createContent',
    data() {
        return {
            loading: true,
            value: '',
            tagSelect: false,
            all: true,
            flag: false,
            value: "",
            a_id: undefined,
            tags: [],
            article: {
                title: '',
                theme: '',
                html: '',
                markdown: '',
                tag: []
            }
        }
    },
    watch: {
    　　'$route': function (to, from) {
            this.$router.go(0)
    　　}
    },
    beforeCreate() {
        if (this.$route.params.a_id != undefined) {
            this.a_id = this.$route.params.a_id
            this.$http.get('api/getArticle' + new Date().getTime(), {
                    params: {
                        a_id: this.a_id
                    }
                })
                .then((res) => {
                    if (res.data.length > 0) {
                        this.article.title = res.data[0].title
                        this.article.theme = res.data[0].theme
                        this.article.html = res.data[0].html
                        this.article.markdown = res.data[0].markdown
                    }
                })
            this.$http.get('api/article/Tag' + new Date().getTime(), {
                    params: {
                        a_id: this.a_id
                    }
                })
                .then((res) => {
                    if (res.data.length > 0) {
                        this.article.tag = res.data
                    }
                })
        }
    },
    methods: {
        handleClose(tag, index) {
            console.log(this.article.tag, this.tags)
            this.article.tag.splice(index, 1)
            this.tags.push(tag)
            this.all = true
        },
        getAllTag() {
            this.tagSelect = true
            let $tag = this.article.tag
            this.$http.get('api/getTag' + new Date().getTime(), {
                    params: {
                        b_user: '000'
                    }
                })
                .then((res) => {
                    if (res.data.length > 0) {
                        this.tags = res.data.filter(function (item, i) {
                            let flag = true
                            $tag.map(function (key, j) {
                                if (key.c_id == item.c_id) {
                                    flag = false
                                }
                            })
                            if (flag) {
                                return item
                            }
                        })
                        this.loading = false
                    }
                })
        },
        selected(value) {
            this.article.tag.push(value)
            console.log(this.article.tag, this.tags)
            this.tagSelect = false
            this.value = ''
            if (this.tags.length == 1) {
                this.all = false
            }
        },
        save(value, render) {
            this.article.html = render
            this.article.markdown = value
        },
        confirm() {
            let a_id = this.$route.params.a_id
            let router = this.$router
            let {
                article
            } = this
            if(a_id!=undefined){
              this.$http.post('api/article/updateArticle', {
                    title: article.title,
                    theme: article.theme,
                    html: article.html,
                    markdown: article.markdown,
                    a_id: a_id
                })
                .then((res) => {
                    if (res.data.flag==true) {
                        this.$message({
                            message: '修改成功！',
                            type: 'success'
                          });
                    }
                })
            this.$http.post('api/article/updateTag', {
                    tags: article.tag,
                    a_id: a_id
                })
                .then((res) => {
                })
            }
            else{
              this.$http.post('api/addArticle', {
                    b_user: '000',
                    title: article.title,
                    theme: article.theme,
                    html: article.html,
                    markdown: article.markdown
                })
                .then((res) => {
                  let a_id=res.data.a_id
                  this.$http.post('api/article/updateTag', {
                      tags: article.tag,
                      a_id: a_id
                  })
                  .then((res) => {
                      this.$message({
                            message: '发布成功！',
                            type: 'success'
                          });
                      router.go({ name: 'Edit', params: { a_id: a_id }})
                  })
                })
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-select .el-input__inner {
    width: 100px !important;
}

</style><style scoped>.createContent {
    margin: 20px auto;
    width: 90%;
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
}

.el-tag {
    margin-right: 10px;
}

.el-button--primary {
    margin-top: 20px;
}
</style>
