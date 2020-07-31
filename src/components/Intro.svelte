<script>
  /**
   * WARNING!
   *
   * Turn off format on save on this document, else there will be a whitespace
   * inserted before the comma and period after the a-tags.
   */

  import Image from "svelte-image";
</script>

<style>
  .intro {
    margin: 20px 0;
    display: flex;
    height: auto;
    align-items: center;
  }

  .intro img {
    max-width: 280px;
    border-radius: 50px;
  }

  p {
    font-family: var(--font-heading);
    font-weight: bold;
    color: var(--color-heading);
    font-size: 26px;
    margin-left: 40px;
  }

  @media (max-width: 750px) {
    .intro {
      flex-wrap: wrap;
      justify-content: center;
    }

    p {
      margin: 20px 0 0 0;
      text-align: center;
    }
  }
</style>

<div class="intro">
  <img alt="Foto van Sander Geraedts" src="img/avatar.jpeg" />
  <p>
    Hallo, ik ben Sander Geraedts. Front-end Dev bij
    <a href="https://sogeti.nl/">Sogeti</a>, 
    hardloper, en baasje van de veel te schattige puppy
    <a href="https://www.instagram.com/luna_the_hufflepuff_retriever">Luna</a>.
  </p>
</div>
