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
  main {
    position: relative;
    margin: 0 auto;
    padding: var(--nav-h) 0 0 0;
    overflow-x: hidden;
  }
</style>

<Icons />

<Nav {segment} {page} logo="caos.svg" title="Caos Documentation">
  <NavItem external="https://caos.ch">Caos</NavItem>

  <NavItem external="https://github.com/caos" title="GitHub Repo">
    <Icon name="github" />
  </NavItem>
</Nav>

<main>
  <slot />
</main>
