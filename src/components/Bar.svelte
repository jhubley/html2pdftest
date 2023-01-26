<script>
  import { max, scaleLinear, scaleBand, format, tickFormat } from "d3";
  import * as d3 from "d3";

  let structuredData = [];
  let chart;

    structuredData = [
      {
        race: "pear",
        rate: 234
      },
      {
        race: "apple",
        rate: 466,
      },
      {
        race: "grapefruit",
        rate: 345,
      },
      {
        race: "lemon",
        rate: 622,
      },
      {
        race: "lime",
        rate: 134
      },
      {
        race: "pineapple",
        rate: 532,
      },
      {
        race: "peach",
        rate: 272,
      },
      {
        race: "kiwi",
        rate: 40,
      },
    ].sort((a, b) => d3.descending(b.rate, a.rate));

  let tooltip = d3.select("body").append("div").attr("class", "tooltip");

  // $: data = points;
  let marginTop = 0; // the top margin, in pixels
  let marginRight = 60; // the right margin, in pixels
  let marginBottom = 30; // the bottom margin, in pixels
  let marginLeft = 0; // the left margin, in pixels
  let width = 800; // the outer width of the chart, in pixels
  let height = 500; // the outer height of the chart, in pixels
  let yPadding = 0.2; // amount of x-range to reserve to separate bars
  let yFormat = ""; // a format specifier string for the y-axis
  let yLabel = "Amount"; // a label for the y-axis
  let color = "#0f4136"; // bar fill color
  let yScalefactor = 4; //y-axis number of values

  // Compute values X and Y value of Arrays
  let x = "rate"; // given d in data, returns the (ordinal) x-value
  let y = "race"; // given d in structuredData, returns the (quantitative) y-value
  $: X = structuredData.map((el) => el[x]);
  $: Y = structuredData.map((el) => el[y]);

  // Compute default domains, and unique the x-domain.
  $: xDomain = [0, max(X)]; // an array of (ordinal) x-values // sort by descending frequency
  $: yDomain = Y; // [ymin, ymax]

  let formatValue = format(".2s");

  // Construct scales, axes, and formats.
  let xRange = [70, width - 90]; // [left, right]
  let yRange = [height - marginBottom, marginTop * 2]; // [bottom, top]
  let xType = scaleLinear; // y-scale type
  $: sortedY = [...yDomain];
  $: xScale = xType(xDomain, xRange);
  $: yScale = scaleBand(sortedY, yRange).padding(yPadding);

  // Create Y-Axis ticks based on yScalefactor spacing
  let yTicks = [];
  $: unit = (Math.max(...Y) - Math.min(...Y)) / yScalefactor;
  $: for (let i = 1; i < yScalefactor + 1; i++) {
    yTicks = [...yTicks, Math.floor(i * unit * 100)];
  }
  function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
  function handleMouseOver(d, e) {
    d3.select(this).attr("stroke-width", "1px").attr("stroke", "#000");
    var tooltip_str = addCommas(d.rate) 
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

  const svg = d3.select("#barChart");

  chart = svg.node();
</script>

<div id="container">
  <svg
    {width}
    {height}
    viewBox="0 0 {width} {height}"
    id="barChart"
    bind:this={chart}
  >
    <g class="bars">
      {#each structuredData as datum, i}
        <rect
          x="70"
          y={yScale(Y[i])}
          width={xScale(X[i])}
          height={yScale.bandwidth()}
          fill={color}
          font-size={"6px"}
          on:mouseover={() => handleMouseOver(datum, event)}
          on:mouseout={handleMouseOut}
        />
      {/each}
    </g>
    <g class="category">
      {#each structuredData as datum, i}
        <text
          x="0"
          y={yScale(Y[i]) + 16}
          width="50"
          height="100"
          class="label-text"
          text-anchor="start"
        >
          {Y[i]}
        </text>
      {/each}
    </g>
  </svg>
  <div class="tooltip" bind:this={tooltip} />
</div>

<style>
  svg {
    max-width: 100%;
    height: auto;
    height: "intrinsic";
  }
  rect {
    transition: transform 2s ease-in;
  }
  .label-text {
    line-height: 130%;
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
