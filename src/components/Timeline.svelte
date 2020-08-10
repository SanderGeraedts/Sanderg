<script>
  import Event from "../components/Event.svelte";

  const events = [
    { date: new Date("2019-12-01"), html: `Verhuisd naar Veendam.` },
    {
      date: new Date("2019-10-01"),
      html: `Begonnen bij <a href="https://www.dictu.nl/">DICTU</a> via <a href="https://sogeti.nl">Sogeti</a> als Full-stack Developer in Assen.`
    },
    {
      date: new Date("2019-7-01"),
      html: `Met Sogeti naar Ohio gegaan voor een business course aan de Ohio University.`
    },
    {
      date: new Date("2019-7-01"),
      html: `Bij Sogeti gestart als Front-end Dev.`
    },
    { date: new Date("2019-6-01"), html: `Afgestudeerd van Fontys HBO ICT.` },
    {
      date: new Date("2018-1-01"),
      html: `Na een paar weken training de rol als coach van het quidditch team <a href="https://www.facebook.com/Lumos-Eindhoven-Quidditch-754006641437774/">Lumos Eindhoven</a> overgenomen.`
    },
    {
      date: new Date("2017-11-15"),
      html: `Begonnen met quidditch bij Lumos Eindhoven.`
    },
    {
      date: new Date("2017-7-01"),
      html: `Officieel begonnen als Webdeveloper bij het voormalige Silverbee (nu <a href="https://webcommitment.nl/">Webcommitment</a>) na een succesvol afgeronde stage.`
    },
    {
      date: new Date("2017-4-01"),
      html: `Na 3 jaar gestopt bij <a href="https://studentaahuis.nl">Studentaanhuis.nl</a> vanwege het uitlopen van mijn contract.`
    },
    {
      date: new Date("2017-2-01"),
      html: `Stage begonnen bij Silverbee met als opdracht de nieuwe versie van de <a href="portfolio/vastgoed-bs">Vastgoed Business School</a>-website.`
    },
    {
      date: new Date("2016-6-01"),
      html: `Begonnen bij <a href="https://www.eyedevelop.nl/">EyeDevelop</a>, waar ik mijn eerste ervaring als Webdeveloper heb opgedaan.`
    },
    {
      date: new Date("2014-4-01"),
      html: `Begonnen bij Studentaanhuis.nl waar ik mensen hielp met hun computerproblemen.`
    }
  ];
</script>

<style>
  .timeline {
    display: flex;
    flex-flow: column;
    width: 100%;
    position: relative;
  }

  @media (min-width: 751px) {
    .timeline::after {
      content: "";
      background-color: var(--color-timeline);
      width: 4px;
      position: absolute;
      top: 30px;
      left: calc(50% - 2px);
      height: 100%;
    }
  }
</style>

<div class="timeline">
  {#each events as event, i}
    <Event date={event.date} align={i % 2 === 1}>
      {@html event.html}
    </Event>
  {/each}
</div>
