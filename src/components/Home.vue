<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      @check-change="handleCheckChange">
    </el-tree>
  </div>
</template>

<script>
import { getArray } from '../utils/course'

   export default {
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      }
    },
    created() {
      this.data = getArray()
    }
  }
</script>