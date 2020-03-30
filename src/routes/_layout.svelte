<script>
  import { stores } from "@sapper/app";
  import Icons from "../components/Icons.svelte";
  import Icon from "../components/Icon.svelte";
  import Nav from "../components/Nav.svelte";
  import NavItem from "../components/NavItem.svelte";

  export let segment;

  const { page } = stores();
</script>

<style>
  /* :global(html) {
    --prime: rgb(
      21,
      151,
      148
    ) !important;
  } */

  main {
    position: relative;
    margin: 0 auto;
    /* padding: var(--nav-h) var(--side-nav) 0 var(--side-nav); */
    padding: var(--nav-h) 0 0 0;
    overflow-x: hidden;
    /* background: #212224; */
  }
</style>

<Icons />

<Nav {segment} {page} logo="caos.svg" title="Caos Documentation">
  <NavItem external="https://caos.ch">Caos</NavItem>

  <NavItem external="https://github.com/sveltejs/sapper" title="GitHub Repo">
    <Icon name="github" />
  </NavItem>
</Nav>

<main>
  <slot />
</main>
