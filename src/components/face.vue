<template>
  <div id="d3">
    <svg width="960" height="500" />
  </div>
</template>
<script>
import {select,arc} from "d3"
export default {
  
  mounted(){
    const svg = select('svg');
    // svg.style("background-color","red");
    const width = 960;
    const height = +svg.attr('height');
    const g = svg.append('g')
            .attr('transform', `translate(${width/2},${height/2})`) 
    const circle = g.append('circle');
    circle
      .attr('r',height/2)
      .attr('fill','yellow') 
      .attr('stroke',"#000") 
    
    const eyeYOffset = -80
    const eyeSpacing = 100
    const eyeG = g.append('g')
            .attr('transform', `translate(0,${eyeYOffset})`)
    const leftEye = eyeG.append('circle');
    const rightEye = eyeG.append('circle');
    // const 
      leftEye
        .attr('r',40)
        .attr('cx',-eyeSpacing)
      rightEye
        .attr('r',40)
        .attr('cx',eyeSpacing)
    const mouth = g.append('path')
      mouth
      .attr('d',arc()({
        innerRadius: 80,
        outerRadius: 100,
        startAngle: Math.PI / 2,
        endAngle: Math.PI*3 / 2
      }))
      .attr('transform', 'translate(0,0)')
  }
}
</script>
