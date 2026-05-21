<script>
  import Displaceable from "$lib/Displaceable.svelte";

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

<main class="mx-auto w-full max-w-xl space-y-14 px-5 py-10 md:py-20">
  <section id="links" class="flex justify-between gap-4">
    <img
      src="/me.webp"
      alt="me"
      class="block size-45 rounded-lg object-cover object-bottom grayscale"
    />
    <div class="flex gap-4">
      {#each social as link}
        <a href={link.href} target="_blank" class="h-fit">{link.name}</a>
      {/each}
    </div>
  </section>

  <h1>
    <Displaceable font="36px Iosevka, ui-monospace, monospace" lineHeight={40}>
      Ethan Lee
    </Displaceable>
  </h1>

  <section id="bio" class="space-y-2 text-neutral-400">
    <Displaceable>founding engineer @ huddle surety</Displaceable>
    <Displaceable>
      master’s in distributed systems @ carnegie mellon
    </Displaceable>
    <Displaceable>kubernetes, next.js contributor</Displaceable>
  </section>

  <section id="homelab" class="flex flex-col gap-4 md:flex-row">
    <img src="/homelab.png" alt="homelab" class="size-50" />
    <div class="flex-1 space-y-2 text-neutral-400">
      <Displaceable>i build things in web and cloud</Displaceable>
      <Displaceable>
        this is my raspberry pi cluster running kubernetes
      </Displaceable>
      <Displaceable>
        it runs my password manager, git server, observability stacks, and this
        website
      </Displaceable>
      <Displaceable>
        check out the whole setup
        <a href={links.homelab} target="_blank" class="underline">here</a>
      </Displaceable>
    </div>
  </section>

  <section id="experience" class="space-y-2 text-neutral-400">
    <Displaceable>things i’ve done so far:</Displaceable>
    <ul class="space-y-2">
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>
          published an
          <a href={links.paper} target="_blank" class="underline">hci paper</a>
          to acm (2026)
        </Displaceable>
      </li>
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>swe intern at ukg (2025 summer)</Displaceable>
      </li>
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>swe intern at estreamly (2024 summer)</Displaceable>
      </li>
    </ul>
  </section>

  <section id="projects" class="space-y-2 text-neutral-400">
    <Displaceable>things i’ve built for fun:</Displaceable>
    <ul class="space-y-2">
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>
          <a
            href="https://github.com/thdxg/macterm"
            target="_blank"
            class="underline"
          >
            macterm
          </a>
          - a native macos terminal with vertical tabs built with libghostty and swiftui
        </Displaceable>
      </li>
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>
          <a
            href="https://github.com/thdxg/llog"
            target="_blank"
            class="underline"
          >
            llog
          </a>
          - a fully local journaling CLI written in go
        </Displaceable>
      </li>
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>
          <a
            href="https://github.com/thdxg/ttype"
            target="_blank"
            class="underline"
          >
            ttype
          </a>
          - a simple bring-your-own-text typing test CLI written in rust
        </Displaceable>
      </li>
      <li class="grid grid-cols-[1rem_1fr] items-start">
        <span>•</span>
        <Displaceable>
          <a
            href="https://github.com/thdxg/ghfetch"
            target="_blank"
            class="underline"
          >
            ghfetch
          </a>
          - neofetch for github profiles written in go
        </Displaceable>
      </li>
    </ul>
  </section>
</main>
