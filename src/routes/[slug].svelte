<script context="module">
    // import get_seo from '../utils/get_seo.js';

    export async function preload(page) {
            const { slug } = page.params;
        const sections = await this.fetch(`${slug}.json`).then(r => r.json());
        // const seotags = get_seo(`${slug}`);

        return { sections, slug };
    }
</script>

<script>
  import Docs from "../components/Docs.svelte";
  export let slug;
  export let sections;
//   export let seotags;
//   console.log(seotags);
</script>

<svelte:head>
  <title>Docs • Zitadel</title>
    <!-- {@html seotags} -->

  <!-- <meta name="twitter:title" content="Zitadel guides" />
  <meta name="twitter:description" content="Caos Identy and Access Management Solution" />
  <meta name="Description" content="Caos Identy and Access Management Solution" /> -->
</svelte:head>

<Docs {sections} project="site" dir="{slug}"/>