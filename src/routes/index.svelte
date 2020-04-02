<script context="module">
  export async function preload(page) {    
    const sections = await this.fetch(`index.json`).then(r => r.json());
    return { sections};
  }
</script>

<script>
    import Docs from "../components/Docs.svelte";
    export let sections;
    import { BASEPATH } from '../../config';

</script>

<svelte:head>
  <title>Docs</title>

  <meta name="twitter:title" content="Zitadel guides" />
  <meta name="twitter:description" content="Caos Identy and Access Management Solution" />
  <meta name="Description" content="Caos Identy and Access Management Solution" />
</svelte:head>


<!-- <style>
    .desc {
        margin: 3rem;
        text-align: center;
    }
</style> -->

<!-- <p class="desc">There's no doc on this path. Provide the docs file in folder /docs/[product] of your repo.</p> -->

<Docs {sections} project="{BASEPATH}" dir=""/>
