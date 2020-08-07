<script>
  import { monthInDutch } from "../functions/dates";
  export let date;
  export let align;
</script>

<style>
  .event {
    margin: 20px 0;
  }
  .event[data-location="right"] {
    text-align: right;
    align-self: flex-end;
    padding-left: 20px;
  }

  .event[data-location="left"] {
    padding-right: 20px;
  }

  header h2 {
    color: var(--color-heading-events);
    position: relative;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    font-size: 26px;
  }

  @media (min-width: 751px) {
    .event {
      width: calc(50% - 20px);
    }

    header h2::after {
      content: "";
      height: 8px;
      width: 8px;
      background-color: var(--color-background);
      border: 4px solid var(--color-timeline);
      position: absolute;

      /* 50% for top to align to center - 4px for half the height 
    and another 4 for the border  */
      top: calc(50% - 8px);
      border-radius: 20px;
      z-index: 100;
    }

    .event[data-location="right"] header h2::after {
      left: -28px;
    }

    .event[data-location="left"] header h2::after {
      right: -28px;
    }
  }
</style>

<div class="event" data-location={`${align ? 'right' : 'left'}`}>
  <header>
    <h2>{`${date.getFullYear()}, ${monthInDutch(date.getMonth())}`}</h2>
  </header>
  <p>
    <slot />
  </p>
</div>
