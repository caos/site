<script context="module">
  export async function preload() {
    const sections = await this.fetch(`docs.json`).then(r => r.json());
    return { sections };
  }
</script>

<script>
  import Docs from "../../components/Docs.svelte";

  export let sections;
</script>

<svelte:head>
  <title>Docs • Citadel</title>

  <meta name="twitter:title" content="Citadel migration guides" />
  <meta name="twitter:description" content="the best iam ever" />
  <meta name="Description" content="The best swissmade iam ever made" />
</svelte:head>

<Docs {sections} project="sapper" />
