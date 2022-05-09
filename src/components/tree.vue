<template>
  <div class="tree">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>

    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      @node-click="handle"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      console.log(val);
      this.$refs.tree.filter(val);
    },
  },

  methods: {
    filterNode(value, data) {
      // console.log(value,data);
      if (!value) return true;
      if(!data.arr){
        return true
      }else{
        return data.arr.indexOf("车辆管理")!==-1 
      }
      // console.log(value,data);
      // if(!value.arr) return true;
      // data.children.map((item,index)=>{
      //   console.log(item,index);
      // })
    },
    handle(data){
      console.log(data);
    }
  },

  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "第一大区",
          level:1,
          children: [
            {
              id: 4,
              level:2,
              label: "国江路停车场",
              children: [
                {
                  id: 9,
                  label: "国江场五楼东边球机",
                  level:3,
                  arr:["人员管理","车辆管理"]
                },
                {
                  id: 10,
                  label: "国江场四楼东1-3",
                  level:3,
                  arr:["车辆管理"]
                },
                {
                  id: 11,
                  label: "国江场五楼东边球机",
                  level:3,
                  arr:["人员管理"]
                },
                {
                  id: 12,
                  label: "国江场四楼西1-3",
                  level:3,
                  arr:["车辆管理"]
                },
              ],
            },
            {
              id: 5,
              level:2,
              label: "逸仙路停车场",
              children: [
                {
                  id: 13,
                  label: "逸仙场五楼东边球机",
                  level:3,
                  arr:["人员管理"]
                },
                {
                  id: 14,
                  label: "逸仙场四楼东1-3",
                  level:3,
                  arr:["车辆管理"]
                },
                {
                  id: 15,
                  level:3,
                  label: "逸仙场五楼东边球机",
                  arr:["人员管理"]
                },
                {
                  id: 16,
                  label: "逸仙场四楼东1-3",
                  level:3,
                  arr:["车辆管理"]
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },

};
</script>