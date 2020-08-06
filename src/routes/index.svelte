<script>
    import { onMount } from 'svelte';
    import manifest from '../../static/manifest.json';
    import { goto } from '@sapper/app';
    onMount(() => goto(`/${manifest.lang}`));
    // TODO add basehref as prefix
    </script>

<svelte:head>
  <title>
    {manifest.name}
  </title>
</svelte:head>
