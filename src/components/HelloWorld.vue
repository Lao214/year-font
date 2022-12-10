<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{ dataObj}}</h3>
  </div>
</template>

<script>
import dataApi from '@/api/data'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      jobNo: 'X2004611',
      dataObj: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      dataApi.getDataByJobNo(this.jobNo).then(res => {
        this.dataObj = res.data.data.data
        // console.log(res.data.data.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
