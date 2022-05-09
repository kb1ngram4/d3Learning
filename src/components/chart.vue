<template>
  <div class="chart" id="chart" ></div>  
</template>
<script>
export default {
  mounted(){
    this.drawChart()
  },
  
  methods:{
    drawChart(){
      this.myChart = this.$echarts.init(
        document.getElementById('chart')
      );
      let option = {
        title: {
          text: '分时间段进出人数记录',
          bottom:0,
          left:'40%'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['员工', '非员工'],
            top:'10%'
        },
        grid: {
            width:'90%',
            height:'70%',
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            name:'人'
        },
        series: [
            {
                name: '员工',
                type: 'line',
                // stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '非员工',
                type: 'line',
                // stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
      }
      this.myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
.chart{
  width: 100%;
  height: 100%;
  /* background: grey; */
}
</style>