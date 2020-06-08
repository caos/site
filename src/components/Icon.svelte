<script>
  export let name;
  export let size = '20px';
</script>

<style>
  :global(a),
  :global(i) {
      font-size: 20px;
      height: 20px;
  }
</style>

<i class={name} style="font-size: {size}; height: {size};"><use xlink:href="#{name}" /></i>
