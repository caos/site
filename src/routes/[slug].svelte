<script context="module">
    export async function preload(page) {
            const { slug } = page.params;
        const sections = await this.fetch(`${slug}.json`).then(r => r.json());
        // const { tags } = await import(`docs/${slug}/seo.json`);
        const tags = [];
        return { sections, slug, tags };
    }
</script>

<script>
  import Docs from "../components/Docs.svelte";
  export let slug;
  export let sections;
  export let tags; 

console.log(tags);
</script>

<svelte:head>
  <title>Docs • Zitadel</title>
    <!-- {@html seotags} -->
    
    {#each tags as { name, content }, i}
     <meta name={name} content={content} />
	{/each}

  <meta name="twitter:title" content="Zitadel guides" />
</svelte:head>

<Docs {sections} project="site" dir="{slug}"/>