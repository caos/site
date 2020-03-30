<script context="module">
  export async function preload() {
    const sections = await this.fetch(`orbos.json`).then(r => r.json());
    return { sections };
  }
</script>

<script>
  import Docs from "../../components/Docs.svelte";

  export let sections;
</script>

<svelte:head>
  <title>Orbos • Solutions</title>

  <meta name="twitter:title" content="Orbos Cluster Mananger" />
  <meta name="twitter:description" content="Meta cluster manager" />
  <meta name="Description" content="Meta cluster manager" />
</svelte:head>

<Docs {sections} dir="orbos" />
