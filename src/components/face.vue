<template>
  <div id="d3">
    <router-link to="/date">时间</router-link><br />
    <router-link to="/chart">Echarts图</router-link><br />
    <router-link to="/tree">树形图</router-link><br />
    <router-link to="/table">表格</router-link><br />
    <svg width="960" height="500" />
    <div class="container"></div>
  </div>
</template>
<script>
import { select, arc } from "d3";
import * as d3 from "d3";
export default {
  mounted() {
    this.drawFace()
    this.drawIndex()
  },
  methods: {
    drawFace() {
      const svg = select("svg");
      // svg.style("background-color","red");
      const width = 960;
      const height = +svg.attr("height");
      const g = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", "0 0 400 400");
      const circle = g.append("circle");
      circle
        .attr("r", height / 2)
        .attr("fill", "yellow")
        .attr("stroke", "#000");

      const eyeYOffset = -80;
      const eyeSpacing = 100;
      const eyeRadius = 40;
      const eyeG = g
        .append("g")
        .attr("transform", `translate(0,${eyeYOffset})`);
      const leftEye = eyeG.append("circle");
      const rightEye = eyeG.append("circle");
      leftEye.attr("r", eyeRadius).attr("cx", -eyeSpacing);
      rightEye.attr("r", eyeRadius).attr("cx", eyeSpacing);

      let arcObj = {
        innerRadius: 80,
        outerRadius: 100,
        startAngle: "",
        endAngle: "",
      };
      function angle(type) {
        if (type == arcObj.startAngle) {
          arcObj.startAngle = -Math.PI / 2;
        } else {
          arcObj.endAngle = Math.PI / 2;
        }
      }
      angle(arcObj.startAngle);
      angle(arcObj.endAngle);
      console.log(arcObj);
      const mouth = g.append("path");
      mouth.attr("d", arc()(arcObj)).attr("transform", "translate(0,150)");
    },
    drawIndex(){
      d3.select('.container')
        .append('svg')
        .attr('width','100%')
          .attr('height','320')
        .append('g')
          .append('circle')
          .attr('r',90).attr('cx',600)

    }
  },
};
</script>
<style scoped>
.btn {
  cursor: pointer;
}
.wrap {
  height: 400px;
  width: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.pdf {
  height: 600px;
  /* background: #333; */
}
</style>
