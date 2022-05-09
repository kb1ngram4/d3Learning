<template>
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>序号</th>
            <th>项目</th>
            <th>分类</th>
            <th>分项</th>
            <th class="w">现场管理</th>
            <th class="w">重大隐患</th>
            <th class="w">汇总</th>
            <th class="w">备注</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{ item.id }}</td>
            <td :rowspan="item.projectspan" :class="{hidden: item.projectdis}">{{ item.project }}</td>
            <td :rowspan="item.typespan" :class="{hidden: item.typedis}">{{ item.type }}</td>
            <td>{{item.subentry}}</td>
            <td>{{item.nowManage}}</td>
            <td>{{item.Hidden}}</td>
            <td>{{item.Total}}</td>
            <td>{{item.remark}}</td>
          </tr>
          </tbody>
      </table>
  </div>
</template>  
<script>
    export default {
        data() {
            return {
                title:'风险评估',
                isShow:false,
                isFinish:false,
                tableData: [
                    {
                        id:1,
                        project: '企业性质分类',
                        type: '针对企业类别',
                        subentry: '生产（危险化学品生产企业）Ⅰ类A、B、C、级',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:'备注备注'
                    },
                    {
                        id:2,
                        project: '企业性质分类',
                        type: '针对企业类别',
                        subentry: '使用（兰炭及配套企业）Ⅱ类A、B、C、级',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:''
                    },
                    {
                        id:3,
                        project: '企业性质分类',
                        type: '针对企业类别',
                        subentry: '储存、经营（加油站）Ⅲ类A、B、C、级C、级',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:''
                    },
                    {
                        id:4,
                        project: '三同时执行情况',
                        type: '针对改扩',
                        subentry: '改扩建未执行',
                        nowManage: '3.2',
                        Hidden: '是',
                        Total:'',
                        remark:''
                    }
                ]
            }
        },
        created() {
            this.getData(this.tableData);
        },
        methods: {
            onEdit(){
                this.isShow = true
                this.isFinish=true
            },
            onComplete(){
                this.isShow = false
                this.isFinish=false
            },
            getData(list){
                //console.log(list[0]);
                for (let field in list[0]) {
          let k = 0
          let i = 0
          while (k < list.length) {
            list[k][field + 'span'] = 1
            list[k][field + 'dis'] = false
            for (i = k + 1; i <= list.length - 1; i++) {
              if (list[k][field] === list[i][field] && list[k][field] !== '') {
                list[k][field + 'span']++
                list[k][field + 'dis'] = false
                list[i][field + 'span'] = 1
                list[i][field + 'dis'] = true
              } else {
                // k = i
                break
              }
            }
            k = i
          }
        }
     return list;
   }
 }
}
</script>

<style lang="postcss" scoped>
.hidden{
    display: none
}
</style>
