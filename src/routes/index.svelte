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
    {#if sections[0] && sections[0].metadata && sections[0].metadata.seotitle}
        <title>Docs • {sections[0].metadata.seotitle}</title>
    {:else}
        <title>Caos • Documentation</title>
    {/if}
  <meta name="Description" content="{sections[0].metadata.seodescription}" />
  <meta name="twitter:title" content="{sections[0].metadata.twittertitle}" />
  <meta name="twitter:description" content="{sections[0].metadata.twitterdescription}" />

</svelte:head>

<Docs {sections} project="{BASEPATH}" dir=""/>
