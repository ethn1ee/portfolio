<script>
  let social = [
    { name: "github", href: "https://github.com/thdxg" },
    { name: "linkedin", href: "https://linkedin.com/in/ethantlee" },
    {
      name: "resume",
      href: "/resume",
    },
  ];
  let links = {
    homelab: "https://github.com/thdxg/homelab",
    paper: "https://dl.acm.org/doi/10.1145/3772318.3790875",
  };
</script>

<main class="mx-auto w-full max-w-xl py-20 px-5 space-y-14">
  <section id="links" class="flex justify-between gap-4">
    <img
      src="/me.webp"
      alt="me"
      class="object-cover size-45 object-bottom rounded-lg block"
    />
    <div class="flex gap-4">
      {#each social as link}
        <a href={link.href} target="_blank" class="h-fit">{link.name}</a>
      {/each}
    </div>
  </section>

  <h1>Ethan Lee</h1>

  <section id="bio">
    <p>
      founding engineer @ huddle surety
      <br />
      master’s in distributed systems @ carnegie mellon
      <br />
      kubernetes, next.js contributor
    </p>
  </section>

  <section id="homelab" class="flex gap-4">
    <img src="/homelab.png" alt="homelab" class="size-50" />
    <p>
      i build things in web and cloud
      <br />
      this is my raspberry pi cluster running kubernetes
      <br />
      it runs my password manager, gitlab, observability stacks, and this website
      <br />
      check out the whole setup
      <a href={links.homelab} target="_blank" class="underline">here</a>
    </p>
  </section>

  <section id="experience">
    <p>things i’ve done so far:</p>
    <ul>
      <li>
        published an
        <a href={links.paper} target="_blank" class="underline"> hci paper </a>
        to acm (2026)
      </li>
      <li>swe intern at ukg (2025 summer)</li>
      <li>swe intern at estreamly (2024 summer)</li>
    </ul>
  </section>

  <section id="fun">
    <p>conway&apos;s game of life for fun:</p>
  </section>
</main>
