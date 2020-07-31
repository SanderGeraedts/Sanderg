<script>
  export let segment;

  import HomeIcon from "./nav-icons/home-icon.svelte";
  import AboutIcon from "./nav-icons/about-icon.svelte";
  import PortfolioIcon from "./nav-icons/portfolio-icon.svelte";
  import ContactIcon from "./nav-icons/contact-icon.svelte";
</script>

<style>
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 15px;
    list-style: none;
  }

  a {
    color: var(--color-link-nav);
    text-decoration: none;
    font-size: 16pt;
    line-height: 60px;
  }

  @media (max-width: 750px) {
    .main-nav {
      height: 80px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--color-navigation);
    }

    ul {
      display: flex;
      justify-content: space-around;
      height: 100%;
    }

    li {
      margin: 0;
    }

    a {
      height: 100%;
      font-family: var(--font-heading);
      color: var(--color-link-nav-sm);
      font-weight: bold;
      font-size: 18px;
      line-height: initial;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
    }

    a:hover,
    a[aria-current] {
      color: var(--color-link-nav-sm-hover);
    }

    .main-nav :global(svg) {
      height: 42px;
    }

    .main-nav :global(svg path),
    .main-nav :global(svg rect) {
      fill: var(--color-link-nav-sm);
    }

    .main-nav a:hover :global(svg path),
    .main-nav a:hover :global(svg rect),
    .main-nav a[aria-current] :global(svg path),
    .main-nav a[aria-current] :global(svg rect) {
      fill: var(--color-link-nav-sm-hover);
    }
  }

  @media (min-width: 751px) {
    .lnk-home {
      display: none;
    }

    .main-nav :global(svg) {
      display: none;
    }
  }
</style>

<nav class="main-nav">
  <ul>
    <li class="lnk-home">
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        <HomeIcon />
        home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'over-mij' ? 'page' : undefined}
        href="about">
        <AboutIcon />
        over mij
      </a>
    </li>
    <li>

      <!-- for the portfolio link, we're using rel=prefetch so that Sapper prefetches
		     the portfolio data when we hover over the link or tap it on a touchscreen -->
      <a
        rel="prefetch"
        aria-current={segment === 'portfolio' ? 'page' : undefined}
        href="portfolio">
        <PortfolioIcon />
        portfolio
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">
        <ContactIcon />
        contact
      </a>
    </li>
  </ul>
</nav>
