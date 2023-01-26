<script>
    let chart;

    let width = 430,
        height = 300,
        size = 465,
        size2 = 120;

</script>
<div id="container">
<div class="triangleChart">
    <svg {width} {height} id="triangle" bind:this={chart}>
        <g>
            <path
                d="M{size / 4},{size / 2} h{size / 2} l{-size / 4},{-size /
                    2} Z"
                fill="#ef1436"
            />
            <path
                d="M{size / 1.335},{size / 2} h{size2 / 2} l{-size2 /
                    4},{size2 / 2} Z"
                fill="#0E002C"
            />
        </g>
    </svg>

    <div id="legend">
        <div id="up">
            <div class="box" />
            Z
        </div>
        <div id="down">
            <div class="box" />
            Y
        </div>
    </div>
</div>

</div>
<style>
    #container{
        display: flex;
        flex-direction: column;
    }
    #legend {
        margin-left: 65px;
    }
    #legend,
    #up,
    #down {
        display: flex;
    }
    .box {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }
    #up .box {
        background-color: #ef4136;
    }
    #down .box {
        background-color: #0e002c;
        margin-left: 10px;
    }
    .triangleChart{
        padding-right: 80px;
    }


</style>
