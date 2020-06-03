<script context="module">
    import fs from 'fs';

    function get_seo_tags(seofile) {
        var fileContents;
        try {
            fileContents = fs.readFileSync(`${seofile}`, 'utf-8');
        } catch (err) {
            console.error(err);
            fileContents = '';
        }
        console.log(fileContents);
        return fileContents;
    }
    export async function preload(page) {
            const { slug } = page.params;
        const sections = await this.fetch(`${slug}.json`).then(r => r.json());
        console.log(`docs/${slug}/seo.html`);
        const seotags = get_seo_tags(`docs/${slug}/seo.html`);
        console.log(seotags);
        return { sections, slug, seotags };
    }
</script>

<script>
  import Docs from "../components/Docs.svelte";
  export let slug;
  export let sections;
  export let seotags;
  export let test = '<meta name="twitter:title" content="Zitadel guides test" />';
</script>

<svelte:head>
  <title>Docs • Zitadel</title>
    {@html test}
    {@html seotags}

  <!-- <meta name="twitter:title" content="Zitadel guides" />
  <meta name="twitter:description" content="Caos Identy and Access Management Solution" />
  <meta name="Description" content="Caos Identy and Access Management Solution" /> -->
</svelte:head>

<Docs {sections} project="site" dir="{slug}"/>