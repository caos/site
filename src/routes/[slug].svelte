<script context="module">
  export async function preload() {
    const sections = await this.fetch(`zitadel.json`).then(r => r.json());
    return { sections };
  }
</script>

<script>
  import Docs from "../../components/Docs.svelte";

  export let sections;
</script>

<svelte:head>
  <title>Docs • Zitadel</title>

  <meta name="twitter:title" content="Zitadel guides" />
  <meta name="twitter:description" content="Caos Identy and Access Management Solution" />
  <meta name="Description" content="Caos Identy and Access Management Solution" />
</svelte:head>

<Docs {sections} project="site" dir="zitadel"/>
