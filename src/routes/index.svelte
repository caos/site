<script>
    import { onMount } from 'svelte';
    import manifest from '../../static/manifest.json';
    import { goto } from '@sapper/app';
    onMount(() => goto(`${manifest.lang}`));
    </script>

<svelte:head>
  <title>
    {manifest.name}
  </title>
</svelte:head>
