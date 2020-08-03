<script>
  import { monthInDutch } from "../functions/dates";
  export let date;
  export let align;
</script>

<style>
  :global(.event.right) {
    text-align: right;
    align-self: flex-end;
    padding-right: 0 !important;
    padding-left: 20px;
  }

  .event {
    margin: 20px 0;
    padding-right: 20px;
  }

  header h2 {
    color: var(--color-heading-events);
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    font-size: 26px;
  }

  @media (min-width: 751px) {
    .event {
      max-width: calc(50% - 20px);
    }
  }
</style>

<div class={`event ${align ? 'right' : ''}`}>
  <header>
    <h2>{`${date.getFullYear()}, ${monthInDutch(date.getMonth())}`}</h2>
  </header>
  <p>
    <slot />
  </p>
</div>
