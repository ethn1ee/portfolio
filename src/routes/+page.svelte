<script>
  import meImg from "$lib/assets/me.webp?enhanced";
  import homelabImg from "$lib/assets/homelab.png?enhanced";
  let social = [
    { name: "github", href: "https://github.com/thdxg" },
    { name: "linkedin", href: "https://linkedin.com/in/ethantlee" },
    {
      name: "resume",
      href: "/resume",
    },
  ];
</script>

<header class="glitch mb-12 flex justify-between gap-4">
  <div class="img-bg size-45 rounded-lg">
    <enhanced:img
      src={meImg}
      alt="me"
      class="block size-full rounded-lg object-cover object-bottom grayscale" />
  </div>
  <nav class="flex gap-4">
    {#each social as link}
      <a href={link.href} target="_blank" class="h-fit">{link.name}</a>
    {/each}
  </nav>
</header>

<main class="glitch space-y-12">
  <h1 class="glitch-initial">Ethan Lee</h1>

  <section id="homelab" class="flex flex-col gap-4 md:flex-row">
    <p>
      i build things in web and cloud
      <br />
      like this two-node raspberry pi kubernetes cluster
      <br />
      it runs my projects, including this website
      <a href="https://github.com/thdxg/homelab" target="_blank">
        (full setup)
      </a>
      <br />
      i also like working in the terminal
    </p>
    <div class="img-bg size-50 shrink-0">
      <enhanced:img src={homelabImg} alt="homelab" class="size-full" />
    </div>
  </section>

  <section id="bio" class="space-y-2 text-neutral-400">
    <p>things i do:</p>
    <ul>
      <li>
        founding engineer of
        <a href="https://huddlesurety.co" target="_blank"> huddle surety </a>
      </li>
      <li>master's in computer science at cmu</li>
      <li>open-source contribution (kubernetes, next.js)</li>
    </ul>
  </section>

  <section id="experience">
    <p>things i've done:</p>
    <ul>
      <li>
        published an
        <a
          href="https://dl.acm.org/doi/10.1145/3772318.3790875"
          target="_blank">
          hci paper
        </a>
        to acm (2026)
      </li>
      <li>graduated summa cum laude from emory univ (2026)</li>
      <li>swe intern at ukg (2025)</li>
      <li>swe intern at estreamly (2024)</li>
    </ul>
  </section>

  <section id="projects">
    <p>things i've built:</p>
    <ul class="list-inside">
      <li>
        <a href="https://github.com/thdxg/macterm" target="_blank">macterm</a>
        - a native macos terminal with vertical tabs built with libghostty and swiftui
      </li>
      <li>
        <a href="https://github.com/thdxg/llog" target="_blank">llog</a>
        - a fully local journaling CLI written in go
      </li>
      <li>
        <a href="https://github.com/thdxg/ttype" target="_blank">ttype</a>
        - a simple bring-your-own-text typing test CLI written in rust
      </li>
      <li>
        <a href="https://github.com/thdxg/ghfetch" target="_blank">ghfetch</a>
        - neofetch for github profiles written in go
      </li>
    </ul>
  </section>
</main>
