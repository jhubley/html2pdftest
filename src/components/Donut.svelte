<script>
  import * as d3 from "d3";

  const fn = d3.arc();

  let tooltip = d3.select("body").append("div").attr("class", "tooltip");
  let chart;

  const segments = [
      {
        type: "A",
        number: 45,
        color: "#9AC4B9",
      },
      {
        type: "B",
        number: 34,
        color: "#6b7d7d",
      },
      {
        type: "C",
        number: 21,
        color: "#b9cdda",
      },
      
    ];

  let angle = Math.PI * 2;

  $: total = segments.reduce((total, s) => total + s.number, 0);

  let arcs;
  $: {
    let acc = 0;
    arcs = segments.map((segment) => {
      const options = {
        innerRadius: 20,
        outerRadius: 40,
        startAngle: acc,
        endAngle: (acc += (angle * segment.number) / total),
      };

      return {
        color: segment.color,
        label: segment.type,
        number: segment.number,
        d: fn(options),
        centroid: fn.centroid(options),
      };
    });
  }

  function handleMouseOver(d, e) {
    d3.select(this).attr("stroke-width", "1px").attr("stroke", "#000");
    var tooltip_str = d.label + " : " + d.number + "%";
    d3.select(tooltip)
      .html(tooltip_str)
      .style("visibility", "visible")
      .style("top", e.layerY - 20 + "px")
      .style("left", e.layerX + "px");
  }
  function handleMouseOut(e) {
    d3.selectAll("rect").attr("stroke", "none").attr("stroke-width", 0);
    d3.select(tooltip).style("visibility", "hidden");
  }


  const svg = d3.select("#donutChart");

  chart = svg.node();
</script>
<div class="break-avoid">
<svg viewBox="0 0 120 120" id="donutChart" bind:this={chart}>
  <g transform="translate(50,50)">
    {#each arcs as arc, i}
      <path
        d={arc.d}
        fill={arc.color}
        on:mouseover={() => handleMouseOver(arc, event)}
        on:mouseout={handleMouseOut}
      />
      <rect x="-50" y={i * 6 + 50} fill={arc.color} width="4" height="4" />
      <text x="-43" y={i * 6 + 53} fill="#000" text-anchor="start"
        >{arc.label}</text
      >
    {/each}
  </g>
</svg>
<div class="tooltip" bind:this={tooltip} />
</div>
<style>
  svg {
    width: 70%;
    height: calc(70% - 5em);
  }

  text {
    font-size: 3px;
  }
  .tooltip {
    position: absolute;
    padding: 15px;
    font: 12px sans-serif;
    background: #fff;
    color: #000;
    border: 0px;
    border-radius: 2px;
    pointer-events: none;
    opacity: 0.9;
    pointer-events: none;
    max-width: 300px;
    visibility: hidden;
  }
</style>
