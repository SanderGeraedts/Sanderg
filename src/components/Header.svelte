<script>
  import Nav from "./Nav.svelte";

  export let segment;
</script>

<style>
  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .logo {
    color: var(--color-logo);
    line-height: 60px;
    font-size: 34px;
    font-family: var(--font-heading);
    text-decoration: none;
    font-weight: bold;
  }
</style>

<div class="header">
  <a href="." class="logo">Sanderg.nl</a>
  <Nav {segment} />
</div>
