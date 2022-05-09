<template>
  <div id="box">
    <svg width="960" height="500" id="svg" />
    <div id="this-new-paragraph"></div>
    <div id="pie"></div>
  </div>
</template>
<script>
// import data from "./data.csv";
import * as d3 from 'd3'
// import {pie,arc} from 'd3'
export default {
  data(){
    return {
      color:["red","blue","#f40","#078","#f90"]
    }
  },
  mounted(){
    setTimeout(() => {
      this.drawAnnular();
      this.drawPie()
    }, 2000);
    const paragraph = d3.select("#this-new-paragraph")
    let array = [1, 2, 3, 4, 5]
    paragraph.style("color", "cornflowerblue")
      .style("font-style", "italic")
      .style("font-weight", "bold")
      .selectAll("div")
      .data(array)
      .enter().append("div")
      .text(d => d)
    setTimeout(() => {
      array = ["this", "is", "new", "content"]
      paragraph.style("color", "tomato")
      paragraph.selectAll("div")
        .data(array)
        .text(d => {
          console.log(d);
          return d
        })
        .exit().remove()
      }, 2000)
    const dataset = [
      {
        date:"2020-8-5",
        temp:10
      },
      {
        date:"2020-8-6",
        temp:11
      }
    ];
    const means = d3.mean(dataset,item=>{
      console.log(item);
      return item.temp
    })
    console.log(means);
    let bisectData = [10,20,30,40,50];
    const bisectIndex = d3.bisect(bisectData,24);
    console.log(bisectIndex);
    console.log(d3.bisectLeft(bisectData,1));

    
  },
  methods:{
    //环形
    drawAnnular(){
      const arcPathGenerator = d3.arc()
        .innerRadius(100)
        .outerRadius(120)
        .startAngle(0)
        .endAngle(Math.PI*3/2)
        .padAngle(0)
        .cornerRadius(20)
      const arcPath = arcPathGenerator()
      d3.select("svg")
        .append('path')
        .attr('d',arcPath)
        .attr('fill',"red" )
        .style('transform', 'translate(50%,50%)')
    },
    //pie
    drawPie(){
      // let data = [1,2,3,4,6,8,11,24,33];
      // let innerRadius = 50;
      // let outerRadius = 100;
      // const svg = d3.select('svg')
      // let pieData = pie()(data)
      // svg.append('path')
      //   .data()
      //   .attr('d',arc()({
      //     innerRadius: innerRadius,
      //     outerRadius: outerRadius,
      //     startAngle: Math.PI/2,
      //     endAngle: Math.PI*3/2
      //   }))
      //   .attr('transform', 'translate(100,100)') 
      // console.log(pieData);
      //绘制SVG矢量图
    var width = 400;
    var height = 400;
    var dataset = [ 30 , 10 , 43 , 55 , 13 ];
    var svg = d3.select("#pie")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    //数据转换
    var pie = d3.pie();
    var piedata = pie(dataset);
    //利用弧生成器生成路径
    var outerRadius = 150;	//外半径
    var innerRadius = 80;	//内半径，为0则中间没有空白
    var arc = d3.arc()	//弧生成器
        .innerRadius(innerRadius)	//设置内半径
        .outerRadius(outerRadius);	//设置外半径
    //设置颜色比例尺
    //添加图形元素,每一个分组用于存放一段弧的相关元素
    let arcs = svg.selectAll("g")
        .data(piedata)
        .enter()
        .append("g")
        .attr("transform","translate("+ (width/2) +","+ (width/2) +")");
    //给每一个图形元素添加path(color+data)
    let color = this.color
    arcs.append("path")
        .attr("fill",function(d,i){
            return color[i];
        })
        .attr("d",function(d){
            return arc(d);
        });
    //在每一个弧线中心添加文本
    arcs.append("text")
        .attr("transform",function(d){
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor","middle")
        .text(function(d){
            return d.data;
        });
    }
  }
  
}
</script>