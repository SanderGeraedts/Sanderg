<script>
  import Header from "../components/Header.svelte";
  import Wrapper from "../components/Wrapper.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Wrapper>
  <Header {segment} />

  <main>
    <slot />
  </main>
</Wrapper>
