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

<main class="mx-auto w-full max-w-xl py-10 md:py-20 px-5 space-y-14">
  <section id="links" class="flex justify-between gap-4">
    <img
      src="/me.webp"
      alt="me"
      class="object-cover size-45 object-bottom rounded-lg block grayscale"
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

  <section id="homelab" class="flex gap-4 flex-col md:flex-row">
    <img src="/homelab.png" alt="homelab" class="size-50" />
    <div class="space-y-2 text-neutral-400 flex-1">
      <Displaceable>i build things in web and cloud</Displaceable>
      <Displaceable
        >this is my raspberry pi cluster running kubernetes</Displaceable
      >
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

  <section id="experience" class="text-neutral-400 space-y-2">
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
</main>
