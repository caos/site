<script>
	import { getContext } from 'svelte';

	export let segment = null;
    export let external = null;
    export let title = '';

	const current = getContext('nav');
</script>

{#if external}
	<li><a name="{title}" href={external}><slot></slot></a></li>
{:else}
	<li class:active="{$current === segment}"><a name="{title}" rel="prefetch" href={segment}><slot></slot></a></li>
{/if}
