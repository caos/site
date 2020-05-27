<script>
  import Blurb from "../components/Blurb.svelte";
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

<Blurb>
  <a href="introduction" slot="one">
    <img src="icons/zitadel-logo-solo-darkdesign.svg" alt="zitadel-logo"/>
        <h2>Introduction</h2>
    <p>Get introduced to our Identity and Access Management Solution</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="get_started" slot="two">
    <img src="icons/zitadel-logo-solo-darkdesign.svg" alt="zitadel-logo"/>
    <h2>Get Started</h2>
    <p>See what we offer and learn how to integrate your solutions</p>

    <span class="learn-more">learn more</span>
  </a>

  <a href="features" slot="three">
    <img src="icons/zitadel-logo-solo-darkdesign.svg" alt="zitadel-logo"/>
    <h2>Features</h2>
    <p>See what we offer and learn how to integrate your solutions</p>

    <span class="learn-more">learn more</span>
  </a>

  <div class="description" slot="what">
    <p>
      Zitadel is the most complete access management platform for your workforce
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
      # asdf
    </pre>
  </div>
</Blurb>
