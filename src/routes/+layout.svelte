<script lang="ts">
  import { onMount } from "svelte";
  import { initGlitch } from "$lib/glitch";
  import "./layout.css";

  let { children } = $props();

  onMount(() => {
    initGlitch();
  });
</script>

<svelte:head>
  <title>Ethan Lee</title>
</svelte:head>

{@render children()}
