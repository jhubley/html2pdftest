<script lang="ts">
  import router from "page";
  import Main from "./pages/Main.svelte";

  let page;
  let params;

  router("/", () => (page = Main));

  router.start();
</script>

<div id="center">
  <svelte:component this={page} {params} />
  <main />
</div>

<style>
  #center {
    max-width: 1000px;
    padding: 0 2rem;
    margin: 0 auto;
  }

</style>
