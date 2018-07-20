<template>
  <div class="testContent">
    <el-button type="primary" @click="getValue">获取我的MYSQL实验中的数据表吧</el-button>
    <el-table
      :data="tableData"
      v-if="flag"
      border
      style="width: 100%">
      <el-table-column
        prop="userid"
        label="学号">
      </el-table-column>
      <el-table-column
        prop="mysql_version"
        label="数据库版本">
      </el-table-column>
      <el-table-column
        prop="linux_version"
        label="linux版本">
      </el-table-column>
      <el-table-column
        prop="eth0_HW"
        label="网卡物理地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'testContent',
  data () {
    return {
      flag: false,
      tableData: []
    }
  },
  methods: {
    getValue () {
      this.$http.get('api/test')
      .then((res) => {
        console.log('res', res)
        this.tableData = res.data
        this.flag = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testContent {
  margin: 100px auto;
  height: 100%;
  width: 50%;
  padding: 2% 4%;
}

button {
  margin: 20px 0;
}
</style>
