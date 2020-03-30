<script>
  import Blurb from "../components/Blurb.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>
    Citadel • The least caotic access management platform every! Foreal!
  </title>
</svelte:head>

<Blurb>
  <a href="https://caos.ch" slot="one">
    <h2>Powered by Caos</h2>
    <p>of course!</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="docs" slot="two">
    <h2>Docs</h2>
    <p>Read the docs now!</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="migrating" slot="three">
    <h2>Migrate fast</h2>
    <p>Read the migration docs now!</p>

    <span class="learn-more">learn more</span>
  </a>

  <div class="description" slot="what">
    <p>
      Citadel is the most complete access management platform for your workforce
      and customers, securing all your critical resources from cloud to ground.
    </p>

    <p>Unlike ...</p>
  </div>

  <div
    style="grid-area: start; display: flex; flex-direction: column; min-width: 0"
    slot="how">
    <pre
      class="language-bash"
      style="margin: 0 0 1em 0; min-width: 0; min-height: 0">
      # some command. dont yet know what might be there.. huhu
    </pre>

    <!-- <p class="cta">
      <a rel="prefetch" href="docs">Learn Sapper</a>
    </p> -->
  </div>
</Blurb>
