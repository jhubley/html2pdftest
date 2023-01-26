<script>
  import Donut from "../components/Donut.svelte";
  import TriangleChart from "../components/TriangleChart.svelte";
  import Bar from "../components/Bar.svelte";
  import html2pdf from "html2pdf.js";

  function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("app-wrapper");

    html2pdf()
      .from(element)
      .set({
        margin: [.5, 1, .5, 1],
        filename: "pdf test",
        pageBreak: { mode: 'avoid' },
        jsPDF: { orientation: "portrait", unit: "in", format: "letter", compressPDF: true },
      })
      .save();

  }
</script>

<div id="app-wrapper">
    <section>
      <h1>test</h1>
      <p class="break-avoid">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Fringilla est ullamcorper eget nulla facilisi. Feugiat nibh sed pulvinar proin. Massa sapien faucibus et molestie ac feugiat. Libero id faucibus nisl tincidunt eget nullam non nisi est. Diam maecenas sed enim ut sem viverra aliquet. Id cursus metus aliquam eleifend mi in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
    </p>
    <span class="break-avoid">
    <Bar />
    </span>
        <p class="break-avoid">
            Tempor orci eu lobortis elementum nibh. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. A pellentesque sit amet porttitor eget dolor morbi non. Faucibus in ornare quam viverra orci sagittis eu volutpat. Nunc sed augue lacus viverra vitae congue eu consequat ac. Vel facilisis volutpat est velit egestas dui id. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Amet mattis vulputate enim nulla aliquet porttitor lacus. Quis varius quam quisque id diam. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Id interdum velit laoreet id. Quis vel eros donec ac odio tempor orci. Laoreet id donec ultrices tincidunt arcu.
        </p>
        <span class="break-avoid">
        <TriangleChart/>
        </span>
        <p class="break-avoid">
            Cras ornare arcu dui vivamus arcu felis bibendum. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Urna condimentum mattis pellentesque id nibh tortor. Aenean pharetra magna ac placerat vestibulum lectus mauris. Nunc pulvinar sapien et ligula ullamcorper malesuada. Nunc sed id semper risus in. Blandit libero volutpat sed cras ornare arcu dui. In iaculis nunc sed augue lacus viverra vitae. Mauris vitae ultricies leo integer malesuada nunc vel. Dui nunc mattis enim ut tellus elementum sagittis. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Vel orci porta non pulvinar neque laoreet. Vel facilisis volutpat est velit egestas dui id.Elit duis tristique sollicitudin nibh sit. Malesuada proin libero nunc consequat interdum varius sit amet. In vitae turpis massa sed elementum tempus egestas. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Euismod lacinia at quis risus sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Metus vulputate eu scelerisque felis imperdiet.
        </p>
        <span class="break-avoid">
        <Donut/>
        </span>
        <p class="break-avoid">
            Consectetur lorem donec massa sapien. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Pellentesque habitant morbi tristique senectus. Non arcu risus quis varius quam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Pretium viverra suspendisse potenti nullam ac tortor vitae. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Pellentesque id nibh tortor id aliquet. Senectus et netus et malesuada fames ac. Maecenas sed enim ut sem. Vitae proin sagittis nisl rhoncus. Felis imperdiet proin fermentum leo vel orci.Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Quis blandit turpis cursus in. Amet consectetur adipiscing elit pellentesque habitant. Magna eget est lorem ipsum dolor. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Lobortis mattis aliquam faucibus purus in massa tempor. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Non pulvinar neque laoreet suspendisse interdum. Habitant morbi tristique senectus et netus et. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.
        </p>
    </section>
  </div>
  <button id="download-button" on:click={generatePDF}>Download PDF</button>
  <style>
    h1{font-size:50px}
  </style>
