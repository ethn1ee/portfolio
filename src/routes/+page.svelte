<script>
  let social = [
    { name: "github", href: "https://github.com/thdxg" },
    { name: "linkedin", href: "https://linkedin.com/in/ethantlee" },
    {
      name: "resume",
      href: "/resume",
    },
  ];
</script>

<main class="glitch mx-auto w-full max-w-xl space-y-14 px-5 py-10 md:py-20">
  <section id="links" class="flex justify-between gap-4">
    <img
      src="/me.webp"
      alt="me"
      class="block size-45 rounded-lg object-cover object-bottom grayscale" />
    <div class="flex gap-4">
      {#each social as link}
        <a href={link.href} target="_blank" class="h-fit">{link.name}</a>
      {/each}
    </div>
  </section>

  <h1>Ethan Lee</h1>

  <section id="bio" class="space-y-2 text-neutral-400">
    <p>
      founding engineer of
      <a href="https://huddlesurety.co" target="_blank" class="underline">
        huddle surety
      </a>
      <br />
      studying distributed systems at carnegie mellon
      <br />
      kubernetes, next.js contributor
    </p>
  </section>

  <section id="homelab" class="flex flex-col gap-4 md:flex-row">
    <img src="/homelab.png" alt="homelab" class="size-50" />
    <p>
      i build things in web and cloud
      <br />
      this is my raspberry pi cluster running kubernetes
      <br />
      it runs my password manager, git server, observability stacks, and this website
      <br />
      check out the whole setup
      <a
        href="https://github.com/thdxg/homelab"
        target="_blank"
        class="underline">
        here
      </a>
    </p>
  </section>

  <section id="experience">
    <p>things i’ve done so far:</p>
    <ul>
      <li>
        published an
        <a
          href="https://dl.acm.org/doi/10.1145/3772318.3790875"
          target="_blank"
          class="underline">
          hci paper
        </a>
        to acm (2026)
      </li>
      <li>swe intern at ukg (2025 summer)</li>
      <li>swe intern at estreamly (2024 summer)</li>
    </ul>
  </section>

  <section id="projects">
    <p>things i’ve built for fun:</p>
    <ul>
      <li>
        <a
          href="https://github.com/thdxg/macterm"
          target="_blank"
          class="underline">macterm</a>
        - a native macos terminal with vertical tabs built with libghostty and swiftui
      </li>
      <li>
        <a
          href="https://github.com/thdxg/llog"
          target="_blank"
          class="underline">llog</a>
        - a fully local journaling CLI written in go
      </li>
      <li>
        <a
          href="https://github.com/thdxg/ttype"
          target="_blank"
          class="underline">ttype</a>
        - a simple bring-your-own-text typing test CLI written in rust
      </li>
      <li>
        <a
          href="https://github.com/thdxg/ghfetch"
          target="_blank"
          class="underline">ghfetch</a>
        - neofetch for github profiles written in go
      </li>
    </ul>
  </section>
</main>
