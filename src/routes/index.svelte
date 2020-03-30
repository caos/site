<script>
  import Blurb from "../components/Blurb.svelte";
    import Hero from "../components/Hero.svelte";

</script>

<style>
    .caos-back {
        position: absolute;
        top: 0;
        right: 0;
        height: 70vh;
    }
</style>

<svelte:head>
  <title>
    Caos • Documentation
  </title>
</svelte:head>

<img class="caos-back" src="icons/caos-logo-outline-1px-pictureonly.svg" alt="caos logo">

<Hero tagline="We give you the tools" title="Caos Documentation"></Hero>

<Blurb>
  <a href="zitadel" slot="one">
    <img src="icons/zitadel-logo-solo-darkdesign.svg" alt="zitadel-logo"/>
        <h2>Zitadel</h2>

    <p>Explore the guide of our Identity and Access Management Solution</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="migrating" slot="two">
    <img src="icons/orbos-logo-solo-darkdesign.svg" alt="zitadel-logo"/>
    <h2>Orbos</h2>
    <p>This is our Meta Cluster Manager. Explore our docs</p>

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
