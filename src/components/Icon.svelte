<script>
  export let name;
  export let size;
</script>

<style>
  :global(i) {
      font-size: 20px;
  }
</style>

<i class={name} style="font-size: {size}"><use xlink:href="#{name}" /></i>
