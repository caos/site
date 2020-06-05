<script context="module">
    export async function preload(page) {
            const { slug } = page.params;
        // const [ lang, slug ] = slug;
        // console.log(lang, slug);
        console.log(slug)
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
    import manifest from '../../static/manifest.json';
</script>

<svelte:head>
  <title>{manifest.name} • {slug}</title>    

    {#each tags as { name, content }, i}
     <meta name={name} content={content} />
	{/each}
</svelte:head>

<Docs {sections} project="site" dir="{slug}"/>