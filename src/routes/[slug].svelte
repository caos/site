<script context="module">
  export async function preload(page) {
          const { slug } = page.params;
    const sections = await this.fetch(`${slug}.json`).then(r => r.json());
    return { sections, slug };
  }
</script>

<script>
  import Docs from "../components/Docs.svelte";
  export let slug;
  export let sections;
  console.log('Seo:', sections);
</script>

<svelte:head>
  <title>Docs • Zitadel</title>
  {#if sections.seo}
    {@html sections.seo}
{/if}
  <!-- <meta name="twitter:title" content="Zitadel guides" />
  <meta name="twitter:description" content="Caos Identy and Access Management Solution" />
  <meta name="Description" content="Caos Identy and Access Management Solution" /> -->
</svelte:head>

<Docs {sections} project="site" dir="{slug}"/>