<script>
  import { marked } from "marked";
  import { fly } from "svelte/transition";

  let { warningText = "undefined warning" } = $props();

  let closed = $state(false);

  const warningIcon = "img/warning.svg";
  const closeIcon = "img/close.svg";
</script>

{#if !closed}
<div class={{ "flex fixed w-[98%] top-2 bg-amber-400 p-5 rounded-md z-1001 gap-3 text-lg" : true, closed: closed}} transition:fly={{ x: -200, duration: 1500, delay: 150}}><img src={warningIcon} alt="warning icon" /><span>{@html marked(warningText)}</span><button class="absolute right-5 top-0 bottom-0 hover:cursor-pointer" onclick="{() => (closed = !closed)}"><img src={closeIcon} alt="close icon"/></button></div>
{/if}