<script>
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

<header class="glitch mb-12">
  <img src="/favicon.svg" alt="logo" class="size-10 shrink-0" />
</header>

<main class="glitch space-y-12">
  <div class="space-y-4">
    <h1 class="glitch-initial">Ethan Lee</h1>
    <nav class="flex gap-4">
      {#each social as link}
        <a href={link.href} target="_blank">{link.name}</a>
      {/each}
    </nav>
  </div>

  <section id="homelab" class="flex flex-col gap-4 md:flex-row">
    <p>
      i build things in web and cloud.
      <br />
      like this two-node raspberry pi kubernetes cluster.
      <br />
      it runs my projects, including this website.
      <a href="https://github.com/thdxg/homelab" target="_blank">
        (full setup)
      </a>
      <br />
      i also like working in the terminal.
    </p>
    <div class="img-bg size-50 shrink-0">
      <enhanced:img
        src={homelabImg}
        alt="homelab"
        class="size-full object-cover" />
    </div>
  </section>

  <section id="bio">
    <ul class="tree">
      <li><span class="marker">*</span>things i do</li>
      <li>
        <span class="marker">⎿</span>
        founding engineer
        <a href="https://huddlesurety.com" target="_blank" class="accent">
          @ huddle surety
        </a>
      </li>
      <li>
        <span class="marker">⎿</span>
        master of software engineering
        <span class="accent">@ cmu</span>
      </li>
      <li>
        <span class="marker">⎿</span>
        contributing to
        <span class="accent">kubernetes, next.js, echo</span>
      </li>
    </ul>
  </section>

  <section id="experience">
    <ul class="tree">
      <li><span class="marker">*</span>things i've done</li>
      <li>
        <span class="marker">⎿</span>
        published an
        <a
          href="https://dl.acm.org/doi/10.1145/3772318.3790875"
          target="_blank">
          hci paper
        </a>
        to acm (2026)
      </li>
      <li>
        <span class="marker">⎿</span>
        graduated magna cum laude from emory univ (2026)
      </li>
      <li>
        <span class="marker">⎿</span>
        swe intern at ukg (2025)
      </li>
      <li>
        <span class="marker">⎿</span>
        swe intern at estreamly (2024)
      </li>
    </ul>
  </section>

  <section id="projects">
    <ul class="tree">
      <li><span class="marker">*</span>things i've built</li>
      <li>
        <span class="marker">⎿</span>
        <a
          href="https://github.com/thdxg/macterm"
          target="_blank"
          class="accent">
          macterm
        </a>
        — a lightweight macos terminal with vertical tabs, session persistence, and
        native ui
      </li>
      <li>
        <span class="marker">⎿</span>
        <a href="https://github.com/thdxg/helix" target="_blank" class="accent">
          helix
        </a>
        — a custom fork of helix editor with plugins, file reloading, and image/pdf
        preview
      </li>
      <li>
        <span class="marker">⎿</span>
        <a href="https://github.com/thdxg/llog" target="_blank" class="accent">
          llog
        </a>
        — a fully local journaling cli written in go
      </li>
      <li>
        <span class="marker">⎿</span>
        <a href="https://github.com/thdxg/ttype" target="_blank" class="accent">
          ttype
        </a>
        — a simple bring-your-own-text typing test cli written in rust
      </li>
      <li>
        <span class="marker">⎿</span>
        <a
          href="https://github.com/thdxg/ghfetch"
          target="_blank"
          class="accent">
          ghfetch
        </a>
        — neofetch for github profiles written in go
      </li>
    </ul>
  </section>
</main>
